import { useEffect, useRef } from "react";

const ScrollItem = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current; // ✅ capture the current element
    if(!element) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target instanceof HTMLElement) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.remove("visible");
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    };
  }, []);

  return <div ref={ref} className="scroll-item">{children}</div>;
};

export default ScrollItem;
