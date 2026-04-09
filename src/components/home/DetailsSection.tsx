import { useLanguage } from "../../i18n/LanguageProvider.tsx";

const detailColors = ["#00f5d4", "#39ff14", "#b967ff", "#00f5d4", "#39ff14", "#b967ff"] as const;

export function DetailsSection() {
  const { copy } = useLanguage();

  return (
    <section id="details" className="relative py-32 md:py-40 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyber">
            {copy.home.details.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6">
            {copy.home.details.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {copy.home.details.items.map((item, index) => (
            <div
              key={item.title}
              className="bg-void p-8 hover:bg-void-light transition-colors reveal"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div
                className="text-xs font-mono uppercase tracking-wider mb-4"
                style={{ color: detailColors[index] }}
              >
                {item.title}
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">{item.desc}</h3>
              <p className="text-cream/40 text-sm">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
