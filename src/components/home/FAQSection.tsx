import { useState } from "react";

import { useLanguage } from "../../i18n/LanguageProvider.tsx";
import { FAQItem } from "./FAQItem.tsx";

export function FAQSection() {
  const { copy } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 md:py-40 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyber">
            {copy.home.faq.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6">
            {copy.home.faq.heading}
          </h2>
        </div>

        <div className="reveal">
          {copy.home.faq.items.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
