import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import TextSubTitleItalic from "../../../shared/Text/TextSubTitleItalic";
import TextSubTitle from "../../../shared/Text/TextSubTitle";
import Inspector from "../../../shared/Inspector/Inspector";
import Velocity from "../../../shared/Velocity/Velocity";
import Container from "../../../shared/Container";
import Footer from "../../../shared/Footer/Footer";
import TextTitle from "../../../shared/Text/TextTitle";

const SectionF = ({ onObserver, id, currentStep }) => {
  return (
    <Inspector index={id} onObserver={onObserver}>
      <RevealLinks id={id} currentStep={currentStep} />
      <BackToTopButton id={id} currentStep={currentStep} />
    </Inspector>
  );
};

export default SectionF;

const RevealLinks = (id, currentStep) => {
  return (
    <section className="bg-Yellow dark:bg-YellowDark h-screen py-5 relative">
      <Container extra={"relative flex gap-10 flex-col"}>
        <section className="flex flex-col gap-5 pt-10">
          <TextSubTitleItalic text={"Gracias por visitar mi portfolio"} extra={""} />
          <TextTitle
            text={
              "Estoy aquí para cualquier pregunta o colaboración. Buscame en mis redes y conectemos."
            }
          />
        </section>
        <section className="flex flex-wrap  gap-10">
          <FlipLink href="https://www.linkedin.com/in/jes%C3%BAs-eduardo-moreno/">
            Linkedin
          </FlipLink>
          <FlipLink href="https://github.com/librotero">GitHub</FlipLink>
          <FlipLink href="https://wa.me/+5492615059621">What'sApp</FlipLink>
        </section>
      </Container>
      <Footer extra={"absolute bottom-0 left-0 w-full bg-Yellow dark:bg-YellowDark"} />
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-6xl  h-fit text-white"
      style={{
        lineHeight: 0.95,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { scrollToSection } from "../../../utils/function";

const BackToTopButton = ({ id, currentStep }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (currentStep === "contacto") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [currentStep]);

  return (
    <motion.button
      onClick={() => scrollToSection("Inicio")}
      className="fixed bottom-40 right-5  sm:bottom-20 sm:right-20 p-4 border-2 border-white text-black rounded-full shadow-lg"
      initial={{ opacity: 0, y: 50, rotate: 180 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 50,
        rotate: visible ? 0 : 180,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <FaArrowUp size={24} />
    </motion.button>
  );
};
