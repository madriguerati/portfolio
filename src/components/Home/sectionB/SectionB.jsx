import { ReactLenis } from "lenis/dist/lenis-react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextBody from "../../../shared/Text/TextBody";
import Inspector from "../../../shared/Inspector/Inspector";
import Container from "../../../shared/Container";
import f from "/public/img/aboutme/f.jpg";
import a from "/public/img/aboutme/a.jpg";
import b from "/public/img/aboutme/b.jpg";
import h from "/public/img/aboutme/h.jpg";
import d from "/public/img/aboutme/d.jpg";
import e from "/public/img/aboutme/e.jpg";
import first from "/public/img/aboutme/first.jpg";

const SectionB = ({ currentStep, id, onObserver }) => {
  return (
    <Inspector currentStep={currentStep} index={id} onObserver={onObserver}>
      <section id={id} className="bg-transparent py-20">
        <ReactLenis
          root
          options={{
            // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
            lerp: 0.05,
            //   infinite: true,
            //   syncTouch: true,
          }}
        >
          {/* <Hero /> */}
          <Schedule />
        </ReactLenis>
      </section>
    </Inspector>
  );
};

export default SectionB;
const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className="relative w-full">
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 " />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["170%", "100%"]);
  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: `url(${f})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto  px-4 hidden sm:hidden md:hidden lg:block ">
      <ParallaxImg
        src={first}
        alt="And example of a space launch"
        start={-100}
        end={50}
        className="w-96"
      />
      <ParallaxImg
        src={h}
        alt="An example of a space launch"
        start={-100}
        end={-1000}
        className="mx-auto w-1/2  object-cover"
      />
      <ParallaxImg
        src={e}
        alt="Orbiting satellite"
        start={-1500}
        end={100}
        className="ml-auto w-1/3"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section id="launch-schedule" className="py-5 pb-0 sm:pb-10 sm:pt-64">
      <Container>
        <motion.article
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-9 flex items-center justify-between  px-3 pb-9"
        >
          <TextBody
            text={
              "He tenido el privilegio de trabajar en proyectos de vanguardia en el ámbito Web3, incluyendo el desarrollo de una plataforma de juegos y un reproductor de música descentralizado. Mi experiencia en tecnologías como Motoko, TypeScript, JavaScript y React me ha permitido crear interfaces responsivas y fáciles de usar, mientras que mi conocimiento de blockchain garantiza la transparencia y seguridad en cada transacción."
            }
          />
        </motion.article>
        <motion.article
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-9 flex items-center justify-between  px-3 pb-9"
        >
          <TextBody
            text={
              "Como Product Manager, he liderado equipos aplicando metodologías ágiles, como SCRUM, para asegurar una gestión eficiente de proyectos y la entrega de resultados de alta calidad. Mi enfoque en la colaboración y la comunicación se refleja en la implementación de funciones de comunicación en tiempo real utilizando Node.js y Socket.io."
            }
          />{" "}
        </motion.article>
        <motion.article
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-9 flex items-center justify-between px-3 pb-9"
        >
          <TextBody
            text={
              "Siempre estoy dispuesto a enfrentar nuevos desafíos y contribuir a proyectos que empujen los límites de la tecnología, combinando mi experiencia técnica con habilidades de gestión para lograr el éxito en cada iniciativa."
            }
          />
        </motion.article>
      </Container>
    </section>
  );
};
