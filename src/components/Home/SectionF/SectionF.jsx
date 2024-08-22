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
    </Inspector>
  );
};

export default SectionF;

const RevealLinks = (id, currentStep) => {
  return (
    <section className="bg-yellow-400 h-screen py-5 relative">
      <Container extra={"relative flex gap-10 flex-col"}>
        <section className="flex flex-col gap-5 py-10">
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
      <Footer extra={"absolute bottom-0 left-0 w-full bg-yellow-400 dark:bg-yellow-400"} />
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
