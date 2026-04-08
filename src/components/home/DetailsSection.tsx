const details = [
  {
    title: "When",
    desc: "November 21-22, 2026",
    sub: "Doors open at 8:30 AM",
    color: "#00f5d4",
  },
  {
    title: "Where",
    desc: "To Be Defined",
    sub: "San José, Costa Rica",
    color: "#39ff14",
  },
  {
    title: "Who",
    desc: "High School Students",
    sub: "Ages 13-18, all skill levels",
    color: "#b967ff",
  },
  {
    title: "Food",
    desc: "All Meals Included",
    sub: "Breakfast, lunch, dinner, snacks",
    color: "#00f5d4",
  },
  {
    title: "Swag",
    desc: "Free T-shirt & Stickers",
    sub: "Plus sponsor goodies",
    color: "#39ff14",
  },
  {
    title: "Prizes",
    desc: "Multiple Categories",
    sub: "Thanks to our generous sponsors",
    color: "#b967ff",
  },
];

export function DetailsSection() {
  return (
    <section id="details" className="relative py-32 md:py-40 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyber">
            03 / Details
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6">
            Everything you need to know
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {details.map((item, index) => (
            <div
              key={item.title}
              className="bg-void p-8 hover:bg-void-light transition-colors reveal"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div
                className="text-xs font-mono uppercase tracking-wider mb-4"
                style={{ color: item.color }}
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
