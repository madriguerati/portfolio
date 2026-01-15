import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import TextBody from "../../shared/Text/TextBody";
import TextSubTitle from "../../shared/Text/TextSubTitle";
import MetricsSection from "../../shared/MetricsSection";
import TextTitle from "../../shared/Text/TextTitle";

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  metrics?: Array<{ name: string; count: number | string }>;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Movimiento horizontal principal
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-92%"]);

  return (
    <section
      ref={targetRef}
      className="relative w-full min-h-[300vh] md:min-h-[360vh] bg-transparent py-12 md:py-20"
    >
      <div className="sticky top-0 z-10 flex h-screen w-full items-center overflow-hidden">
        {/* Gradientes para reforzar la sensación de desaparición */}

        <motion.div
          style={{ x }}
          className="flex gap-10 sm:gap-14 md:gap-20 lg:gap-24 p-6 sm:p-12 md:p-16 lg:p-40  "
        >
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              {...exp}
              index={index}
              total={experiences.length}
              scrollProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface CardProps extends Experience {
  index: number;
  total: number;
  scrollProgress: any;
}

function ExperienceCard({
  company,
  position,
  period,
  description,
  highlights = [],
  technologies,
  metrics = [],
  index,
  total,
  scrollProgress,
}: CardProps) {
  const title = `${position} — ${company}`;

  // Opacidad: se desvanece rápido cuando pasa hacia la izquierda
  const opacity = useTransform(
    scrollProgress,
    [
      (index - 0.4) / total, // empieza a ser muy visible
      index / total, // máxima visibilidad (centro)
      (index + 0.6) / total, // empieza a desvanecerse bastante rápido
      (index + 1.1) / total, // prácticamente invisible
    ],
    [0.2, 1, 0.3, 0]
  );

  return (
    <motion.div
      style={{
        opacity,
      }}
      className={`
        w-[90vw] max-w-[80vw]
        h-[88vh] sm:h-[82vh] md:h-[90vh]
        flex flex-col gap-5
        pt-20
        pl-20
        flex-shrink-0
        snap-center 
      `}
    >
      {/* Título y datos principales */}

      <TextSubTitle text={title} extra={"font-black"} />

      <TextBody text={period} extra="font-light text-left py-2" />
      <TextBody text={description} extra="text-base md:text-lg leading-relaxed " />

      {/* Highlights */}
      <section className="leading-relaxed flex justify-start items-center ">
        <div className="w-1 h-full bg-Yellow rounded-full"></div>
        {highlights.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2  bg-white/40 p-5 ">
            {highlights.map((item, i) => (
              <div key={i} className="leading-relaxed flex justify-start items-start gap-2 ">
                *<TextBody text={item} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <div className="border-t border-white/12 dark:border-white/10 flex flex-col justify-start gap-2">
        {technologies.length > 0 && (
          <TextSubTitle text="Tecnologías" extra="text-xl md:text-2xl font-bold block" />
        )}

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-4 py-2 text-sm md:text-base
                bg-white/12 dark:bg-white/8
                rounded-full
                backdrop-blur-md
                border border-white/15
                whitespace-nowrap
                bg-blue-500/40
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {metrics.length > 0 && (
          <div className="mt-4">
            <MetricsSection data={metrics} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
