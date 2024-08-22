import { useEffect, useRef } from "react";

const Inspector = ({ children, index, onObserver }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onObserver(index);
          console.log(index);
        });
      },
      { threshold: 0, rootMargin: "-60% 0% -50% 0%" }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [index]);
  return (
    <section id={index} ref={ref}>
      {children}
    </section>
  );
};
export default Inspector;
