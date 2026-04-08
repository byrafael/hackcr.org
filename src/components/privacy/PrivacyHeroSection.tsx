export function PrivacyHeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 bg-void" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-matrix">
          Data Protection
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mt-6 mb-6">
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl text-cream/40 max-w-2xl mx-auto">
          How we collect, use, and protect your personal information when you interact with our
          platform.
        </p>
      </div>
    </section>
  );
}
