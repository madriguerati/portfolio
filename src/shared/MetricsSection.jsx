import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import TextBody from "./Text/TextBody";
import TextSubTitleItalic from "./Text/TextSubTitleItalic";
import TextSubTitle from "./Text/TextSubTitle";

const MetricsSection = ({ data, id, currentStep }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 }); // Considera la sección en vista cuando el 50% es visible
  const [animatedCounts, setAnimatedCounts] = useState({});
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (isInView && !animationTriggered) {
      const newCounts = {};
      data?.forEach(({ name, count }) => {
        newCounts[name] = count;
      });
      setAnimatedCounts(newCounts);
      setAnimationTriggered(true); // Evita que la animación se repita
    }
  }, [isInView, animationTriggered, data]);

  return (
    <section ref={ref} className="sm:flex sm:flex-wrap grid-cols-2 grid gap-10 w-full">
      {data.map(({ name }) => (
        <section key={name} className="flex flex-col justify-center items-center gap-5">
          <TextBody text={name} extra={"text-center"} />
          <motion.span initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
            <CountUp end={animatedCounts[name] || 0} duration={1} />
          </motion.span>
        </section>
      ))}
    </section>
  );
};

export default MetricsSection;

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor((duration * 1000) / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <section className="w-20 h-20  bg-opacity-30 flex justify-center items-center rounded-full">
      <TextSubTitle text={count} />
    </section>
  );
};
