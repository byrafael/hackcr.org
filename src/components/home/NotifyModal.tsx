import { useEffect, useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotifyModal({ isOpen, onClose }: NotifyModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
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
        setSubmitError("");
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    const normalizedPhone = phone.trim();

    if (normalizedPhone) {
      const phoneFormat = /^\+?[0-9\s().-]+$/;
      const digitsOnly = normalizedPhone.replace(/\D/g, "");
      if (!phoneFormat.test(normalizedPhone) || digitsOnly.length < 7 || digitsOnly.length > 15) {
        setSubmitError("Please enter a valid phone number.");
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

      const result = (await response.json().catch(() => null)) as { message?: string } | null;
      if (!response.ok) {
        throw new Error(result?.message || "Could not submit your request right now.");
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative glass-card rounded-2xl p-8 max-w-md w-full mx-auto animate-slide-up"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#f8f9fa]/40 hover:text-[#f8f9fa] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#ff9f1c]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#ff9f1c]" />
            </div>
            <h2 className="font-display text-2xl font-bold mb-4">You&apos;re on the list!</h2>
            <p className="text-[#f8f9fa]/60 mb-6">
              We&apos;ll notify you when registration opens. Stay tuned!
            </p>
            <button onClick={onClose} className="btn-primary px-8 py-3">
              Got it
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold mb-2">Get Notified</h2>
              <p className="text-[#f8f9fa]/60 text-sm">
                Be the first to know when registration opens.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-display uppercase tracking-wider text-[#f8f9fa]/50 mb-2"
                >
                  Name <span className="text-[#e71d36]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-[#0c0c10] border border-white/10 rounded-lg text-[#f8f9fa] placeholder:text-[#f8f9fa]/30 focus:outline-none focus:border-[#ff9f1c] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-display uppercase tracking-wider text-[#f8f9fa]/50 mb-2"
                >
                  Email <span className="text-[#e71d36]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[#0c0c10] border border-white/10 rounded-lg text-[#f8f9fa] placeholder:text-[#f8f9fa]/30 focus:outline-none focus:border-[#ff9f1c] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-display uppercase tracking-wider text-[#f8f9fa]/50 mb-2"
                >
                  Phone <span className="text-[#f8f9fa]/30">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+506 1234-5678"
                  pattern="^\+?[0-9\s().-]+$"
                  title="Use digits and optional +, spaces, parentheses, dots, or dashes."
                  className="w-full px-4 py-3 bg-[#0c0c10] border border-white/10 rounded-lg text-[#f8f9fa] placeholder:text-[#f8f9fa]/30 focus:outline-none focus:border-[#ff9f1c] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="school"
                  className="block text-sm font-display uppercase tracking-wider text-[#f8f9fa]/50 mb-2"
                >
                  School <span className="text-[#f8f9fa]/30">(optional)</span>
                </label>
                <input
                  type="text"
                  id="school"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder="Your school name"
                  className="w-full px-4 py-3 bg-[#0c0c10] border border-white/10 rounded-lg text-[#f8f9fa] placeholder:text-[#f8f9fa]/30 focus:outline-none focus:border-[#ff9f1c] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !name.trim() || !email.trim()}
                className="w-full btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0c0c10]/30 border-t-[#0c0c10] rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Notify Me
                  </>
                )}
              </button>

              {submitError ? (
                <p className="text-sm text-[#e71d36] text-center" role="alert">
                  {submitError}
                </p>
              ) : null}
            </form>

            <p className="text-xs text-[#f8f9fa]/30 text-center mt-4">
              You confirm your agreement to our{" "}
              <a
                href="/privacy"
                className="text-[#f8f9fa]/40 hover:text-[#f8f9fa] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              .
            </p>
          </>
        )}
      </div>
    </div>
  );
}
