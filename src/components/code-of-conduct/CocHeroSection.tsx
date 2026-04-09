import { useLanguage } from "../../i18n/LanguageProvider.tsx";

export function CocHeroSection() {
  const { copy } = useLanguage();

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 bg-void" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-matrix">
          {copy.conduct.hero.eyebrow}
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mt-6 mb-6">
          {copy.conduct.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-cream/40 max-w-2xl mx-auto">
          {copy.conduct.hero.description}
        </p>
      </div>
    </section>
  );
}
