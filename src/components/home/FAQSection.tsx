import { useState } from "react";

import { FAQItem } from "./FAQItem.tsx";

const faqs = [
  {
    q: "What is a hackathon?",
    a: "A hackathon is a 24-hour event where students come together to build creative projects, learn new technologies, and compete for prizes. No coding experience required, just bring your curiosity and creativity.",
  },
  {
    q: "Who can participate?",
    a: "HackCR is open to all high school students in Costa Rica, ages 13-18. Whether you're a beginner or experienced coder, everyone is welcome.",
  },
  {
    q: "Do I need a team?",
    a: "You can apply solo or with a team of up to 4 people. If you don't have a team, we'll have team formation activities at the start of the event.",
  },
  {
    q: "Is it free?",
    a: "Yes. HackCR is completely free thanks to our sponsors. We provide meals, snacks, swag, and all the resources you need.",
  },
  {
    q: "What should I bring?",
    a: "Bring your laptop, charger, student ID, and a water bottle. We'll provide food, WiFi, and a space to work. A sleeping bag is optional but recommended.",
  },
  {
    q: "Will there be prizes?",
    a: "Yes. We have over 5 million colones in prizes across multiple categories including Best Overall, Best Beginner Project, Most Creative, and more.",
  },
];

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 md:py-40 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyber">05 / FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6">
            Questions.
          </h2>
        </div>

        <div className="reveal">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              isOpen={openFAQ === index}
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
