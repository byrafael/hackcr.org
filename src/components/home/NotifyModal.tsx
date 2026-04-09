import { useEffect, useState } from "react";
import { Check, CheckCircle, Send, X } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../i18n/LanguageProvider.tsx";

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotifyModal({ isOpen, onClose }: NotifyModalProps) {
  const { copy } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setName("");
        setEmail("");
        setPhone("");
        setSchool("");
        setPrivacyConsent(false);
        setSubmitError("");
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !privacyConsent) return;
    const normalizedPhone = phone.trim();

    if (normalizedPhone) {
      const phoneFormat = /^\+?[0-9\s().-]+$/;
      const digitsOnly = normalizedPhone.replace(/\D/g, "");
      if (!phoneFormat.test(normalizedPhone) || digitsOnly.length < 7 || digitsOnly.length > 15) {
        setSubmitError(copy.home.notifyModal.phoneError);
        return;
      }
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://hackcr.org/api/notify-me.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: normalizedPhone,
          school: school.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(copy.home.notifyModal.requestError);
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : copy.home.notifyModal.genericError);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative glass-card rounded-2xl p-8 max-w-md w-full mx-auto animate-slide-up"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cream/40 hover:text-cream transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-cyber/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-cyber" />
            </div>
            <h2 className="font-display text-2xl font-bold mb-4">
              {copy.home.notifyModal.successTitle}
            </h2>
            <p className="text-cream/60 mb-6">{copy.home.notifyModal.successDescription}</p>
            <button
              type="button"
              onClick={onClose}
              className="btn-primary px-8 py-3 inline-flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              {copy.home.notifyModal.successButton}
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold mb-2">
                {copy.home.notifyModal.title}
              </h2>
              <p className="text-cream/60 text-sm">{copy.home.notifyModal.description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-display uppercase tracking-wider text-cream/50 mb-2"
                >
                  {copy.home.notifyModal.fields.name} <span className="text-matrix">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder={copy.home.notifyModal.fields.namePlaceholder}
                  className="w-full px-4 py-3 bg-void border border-white/10 rounded-lg text-cream placeholder:text-cream/30 focus:outline-none focus:border-amber transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-display uppercase tracking-wider text-cream/50 mb-2"
                >
                  {copy.home.notifyModal.fields.email} <span className="text-matrix">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder={copy.home.notifyModal.fields.emailPlaceholder}
                  className="w-full px-4 py-3 bg-void border border-white/10 rounded-lg text-cream placeholder:text-cream/30 focus:outline-none focus:border-cyber transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-display uppercase tracking-wider text-cream/50 mb-2"
                >
                  {copy.home.notifyModal.fields.phone}{" "}
                  <span className="text-cream/30">({copy.home.notifyModal.fields.optional})</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={copy.home.notifyModal.fields.phonePlaceholder}
                  pattern="^\+?[0-9\s().-]+$"
                  title={copy.home.notifyModal.phoneValidation}
                  className="w-full px-4 py-3 bg-void border border-white/10 rounded-lg text-cream placeholder:text-cream/30 focus:outline-none focus:border-cyber transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="school"
                  className="block text-sm font-display uppercase tracking-wider text-cream/50 mb-2"
                >
                  {copy.home.notifyModal.fields.school}{" "}
                  <span className="text-cream/30">({copy.home.notifyModal.fields.optional})</span>
                </label>
                <input
                  type="text"
                  id="school"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder={copy.home.notifyModal.fields.schoolPlaceholder}
                  className="w-full px-4 py-3 bg-void border border-white/10 rounded-lg text-cream placeholder:text-cream/30 focus:outline-none focus:border-cyber transition-colors"
                />
              </div>

              <div className="flex items-center justify-center gap-3 py-2">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  checked={privacyConsent}
                  onChange={(e) => setPrivacyConsent(e.target.checked)}
                  required
                  className="w-4 h-4 rounded border-white/20 bg-void text-cyber focus:ring-cyber/50 focus:ring-2"
                />
                <label htmlFor="privacyConsent" className="text-sm text-cream/70 leading-relaxed">
                  {copy.home.notifyModal.privacyConsentBefore}{" "}
                  <Link
                    to="/privacy"
                    className="text-cyber hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {copy.home.notifyModal.privacyConsentLink}
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !name.trim() || !email.trim() || !privacyConsent}
                className="w-full btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-void/30 border-t-void rounded-full animate-spin" />
                    {copy.home.notifyModal.submitting}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {copy.home.notifyModal.submit}
                  </>
                )}
              </button>

              {submitError ? (
                <p className="text-sm text-matrix text-center" role="alert">
                  {submitError}
                </p>
              ) : null}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
