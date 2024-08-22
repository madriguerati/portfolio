import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import TextSubTitleItalic from "../../../shared/Text/TextSubTitleItalic";
import TextSubTitle from "../../../shared/Text/TextSubTitle";
import Inspector from "../../../shared/Inspector/Inspector";
import Velocity from "../../../shared/Velocity/Velocity";
import Container from "../../../shared/Container";

const SectionF = ({ onObserver, id, currentStep }) => {
  return (
    <Inspector index={id} onObserver={onObserver}>
      <RevealLinks id={id} currentStep={currentStep} />
    </Inspector>
  );
};

export default SectionF;

const RevealLinks = (id, currentStep) => {
  return (
    <section className="bg-blue-300 h-screen py-20">
      <Container extra={"relative flex gap-10 flex-col"}>
        <section className="flex flex-col gap-5 py-10">
          <TextSubTitleItalic text={"Gracias por visitar mi portfolio"} extra={""} />
          <TextSubTitle
            text={
              "Estoy aquí para cualquier pregunta o colaboración. Buscame en mis redes y conectemos."
            }
          />
        </section>
        <section className="flex flex-col gap-4">
          <FlipLink href="https://www.linkedin.com/in/jes%C3%BAs-eduardo-moreno/">
            Linkedin
          </FlipLink>
          <FlipLink href="https://github.com/librotero">GitHub</FlipLink>
          <FlipLink href="https://wa.me/+5492612336104">What'sApp</FlipLink>
        </section>
      </Container>
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
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-6xl  h-fit"
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
