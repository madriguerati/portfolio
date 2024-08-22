import Section from "../../shared/Section/Section";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Container from "../../shared/Container";
import TextTitle from "../../shared/Text/TextTitle";
import TextBody from "../../shared/Text/TextBody";
import Inspector from "../../shared/Inspector/Inspector";
import ButtonSimple from "../../shared/buttons/ButtonSimple";
import { useLang } from "../../context/LangContext";
import { scrollToSection } from "../../utils/function";
import Velocity from "../../shared/Velocity/Velocity";
const SectionA = ({ onObserver, id }) => {
  const { scrollY } = useScroll();
  const { data } = useLang();
  console.log(window.innerHeight);
  const y1 = useSpring(useTransform(scrollY, [0, 1000], [0, -400]), { stiffness: 50, damping: 15 });
  const rotate1 = useSpring(useTransform(scrollY, [0, 1000], [0, -360]), {
    stiffness: 50,
    damping: 15,
  });

  const y2 = useSpring(useTransform(scrollY, [0, 1200], [0, 50]), { stiffness: 50, damping: 15 });
  const rotate2 = useSpring(useTransform(scrollY, [0, 1000], [0, 360]), {
    stiffness: 50,
    damping: 15,
  });

  const y3 = useSpring(useTransform(scrollY, [0, 2000], [0, -400]), {
    stiffness: 50,
    damping: 15,
  });

  const items = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "API",
    "Frontend",
    "Backend",
    "DevOps",
    "Database",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Redux",
    "Tailwind",
    "Next.js",
    "Express",
    "MongoDB",
    "SQL",
    "Docker",
    "CI/CD",
    "WebSocket",
    "GraphQL",
    "REST",
    "JSON",
    "Firebase",
    "Jest",
    "Webpack",
    "Agile",
  ];
  return (
    <Inspector index={id} onObserver={onObserver}>
      <Section
        id={"home"}
        type={"center"}
        h={"h-screen sm:h-screen md:h-screen"}
        extra={"relative z-20"}
      >
        {/* <motion.img
          src={data?.sectionA?.img}
          alt=""
          className="absolute top-10 sm:top-10 md:top-28 right-10 z-0 opacity-10 w-40"
          style={{ y: y1, rotate: rotate1 }} // Aplica la animación de movimiento vertical y rotación
        />
        <motion.img
          src={data?.sectionA?.img}
          alt=""
          className="absolute top-72 sm:top-72 md:top-96 right-0 sm:right-0 md:right-40 z-0 opacity-30 w-60"
          style={{ y: y2, rotate: rotate2 }} // Aplica la animación de movimiento vertical y rotación
        />
        <motion.img
          src={data?.sectionA?.img}
          alt=""
          className="absolute top-[500px] sm:top-[600px] md:top-[600px]  left-0 sm:left-0 md:left-40 z-10 opacity-20 w-60"
          style={{ y: y3, rotate: rotate3 }} // Aplica la animación de movimiento vertical y rotación
        /> */}
        <section className="  opacity-5 z-10 w-full absolute top-0 left-0">
          <motion.section style={{ y: y3 }}>
            {" "}
            <Velocity right={"-100%"} left={"0%"} extra={""} duration={100}>
              {items.map((item, index) => (
                <ItemVelocity key={item} item={item} />
              ))}
            </Velocity>
          </motion.section>
          <motion.section style={{ y: y3 }}>
            {" "}
            <Velocity right={"0%"} left={"-100%"} extra={""} duration={100}>
              {items.map((item, index) => (
                <ItemVelocity key={item} item={item} />
              ))}
            </Velocity>
          </motion.section>
          <motion.section style={{ y: y2 }}>
            {" "}
            <Velocity right={"-100%"} left={"0%"} extra={""} duration={50}>
              {items.map((item, index) => (
                <ItemVelocity key={item} item={item} />
              ))}
            </Velocity>
          </motion.section>
          <motion.section
            style={{ y: y2 }}
            className={`${window.innerHeight <= "940" && "hidden"}`}
          >
            {" "}
            <Velocity right={"0%"} left={"-100%"} extra={""} duration={50}>
              {items.map((item, index) => (
                <ItemVelocity key={item} item={item} />
              ))}
            </Velocity>
          </motion.section>
        </section>

        <Container
          extra={
            "flex flex-col gap-10 justify-center items-start  h-full pt-20 absolute top-0 left-0 w-full z-20"
          }
        >
          <TextTitle text={data?.sectionA?.membrete} extra={"w-[80%]"} />
          <TextBody text={data?.sectionA?.subMembrete} extra={"w-[80%] hidden sm:hidden md:flex"} />

          <section
            className="flex justify-start w-full"
            onClick={() => scrollToSection("launch-schedule")}
          >
            <ButtonSimple
              text={data?.sectionA?.buttonInfo}
              w={"w-full sm:w-full md:w-2/3"}
              display={"start"}
              bg={"bg-yellow-400"}
              border={"border-yellow-600 border-2"}
              hover={"hover:bg-yellow-600"}
              textColor={"black"} // Corrige "balck" a "black"
              disabled={false}
              extra={"z-40"}
            />
          </section>
        </Container>
      </Section>
    </Inspector>
  );
};

export default SectionA;

const ItemVelocity = ({ item }) => {
  return (
    <h1 className="text-[300px] 2xl:text-[300px] xl:text-[300px] lg:text-[250px] md:text-[400px] sm:text-[100px] font-extrabold uppercase m-0 p-0 leading-[250px]">
      {item}
    </h1>
  );
};
