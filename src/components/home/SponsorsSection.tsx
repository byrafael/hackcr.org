export function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-32 md:py-40 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#9d4edd]">
            04 / Sponsors
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6">
            Powered by
          </h2>
          <p className="text-lg text-[#f8f9fa]/40 mt-4 max-w-xl mx-auto">
            HackCR is made possible by companies that believe in the next generation of builders.
          </p>
        </div>

        <div className="reveal glass-card rounded-2xl p-12 md:p-16 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-4xl mb-6">🤝</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              We&apos;re looking for sponsors
            </h3>
            <p className="text-[#f8f9fa]/50 text-lg mb-8 leading-relaxed">
              Help us make HackCR 2026 unforgettable. Partner with Costa Rica&apos;s first high
              school hackathon and connect with the next generation of builders.
            </p>
            <a href="mailto:sponsor@hackcr.org" className="btn-primary px-8 py-4 inline-block">
              Become a Sponsor
            </a>
          </div>
        </div>

        <div className="text-center mt-12 reveal flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-white/10" />
          <a
            href="mailto:sponsor@hackcr.org"
            className="text-[#f8f9fa]/30 hover:text-[#ff9f1c] transition-colors text-sm font-mono"
          >
            sponsor@hackcr.org
          </a>
          <div className="h-px w-12 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
