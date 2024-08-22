import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TextSubTitle from "../Text/TextSubTitle";
import TextBody from "../Text/TextBody";
import MetricsSection from "../MetricsSection";

const Example = ({ sections }) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="bg-white dark:bg-black">
      <HorizontalScrollCarousel
        sections={sections}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  );
};

const HorizontalScrollCarousel = ({ sections, currentStep, setCurrentStep }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${100 * (sections.length - 1)}%`]);

  useEffect(() => {
    const totalSections = sections.length;

    scrollYProgress.onChange((latest) => {
      const newStep = Math.round(latest * totalSections) + 1;
      if (newStep !== currentStep) {
        setCurrentStep(newStep);
      }
    });
  }, [scrollYProgress, sections.length, currentStep, setCurrentStep]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-full">
          {sections?.map((card, index) => (
            <Card card={card} key={card.id} index={index + 1} currentStep={currentStep} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, index, currentStep }) => {
  const isActive = currentStep === index;

  return (
    <section className="flex-shrink-0 w-full h-full px-32 border border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 py-20 gap-40 w-full h-full">
        <article className="flex flex-col justify-center items-start h-full gap-5">
          <TextSubTitle text={card?.title} position={"text-start"} />
          <ul className="list-none pl-0">
            {card?.listItems.map((item, idx) => (
              <li
                key={idx}
                className={
                  idx > 0
                    ? "relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-black before:text-xl"
                    : "mb-5"
                }
              >
                <TextBody text={item} position={"text-start"} />
              </li>
            ))}
          </ul>
        </article>
        <MetricsSection
          id={index}
          currentStep={currentStep}
          data={{
            SecondSection: {
              metricas: card?.metrics,
            },
          }}
          isActive={isActive} // Nuevo prop para activar la animación
        />
      </div>
    </section>
  );
};

export default Example;
