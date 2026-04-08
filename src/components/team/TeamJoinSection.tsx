import { UserPlus } from "lucide-react";

export function TeamJoinSection() {
  return (
    <section className="relative py-16 md:py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Want to join the team?</h2>
        <p className="text-cream/40 mb-8 max-w-xl mx-auto">
          We&apos;re looking for passionate students to help organize HackCR 2026. If you&apos;re
          interested, reach out to us.
        </p>
        <a href="/apply" className="btn-primary px-8 py-4 inline-flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          Apply
        </a>
      </div>
    </section>
  );
}
