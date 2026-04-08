export function CocHeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 bg-[#0c0c10]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#39ff14]">
          Community Guidelines
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mt-6 mb-6">
          Code of Conduct
        </h1>
        <p className="text-lg md:text-xl text-[#f8f9fa]/40 max-w-2xl mx-auto">
          Our commitment to creating a safe, inclusive, and welcoming environment for all
          participants.
        </p>
      </div>
    </section>
  );
}
