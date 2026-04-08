interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="faq-item">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-display text-lg md:text-xl font-medium text-[#f8f9fa] group-hover:text-[#00f5d4] transition-colors duration-300 pr-4">
          {question}
        </span>
        <span className={`faq-icon text-2xl text-[#00f5d4] ${isOpen ? "open" : ""}`}>+</span>
      </button>
      <div className={`faq-content ${isOpen ? "open" : ""}`}>
        <div>
          <p className="text-[#f8f9fa]/50 text-base md:text-lg leading-relaxed pb-6">{answer}</p>
        </div>
      </div>
    </div>
  );
}
