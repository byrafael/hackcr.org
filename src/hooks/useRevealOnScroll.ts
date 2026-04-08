import { useEffect } from "react";

export function useRevealOnScroll(): void {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".reveal").forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight - 100) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
