import { useState } from "react";
import { FaCheck, FaUser, FaIdBadge, FaClipboardList, FaThumbsUp } from "react-icons/fa";
import Inspector from "../../../shared/Inspector/Inspector";
import MetricsSection from "../../../shared/MetricsSection";
import Section from "../../../shared/Section/Section";
import TextBody from "../../../shared/Text/TextBody";
import TextSubTitle from "../../../shared/Text/TextSubTitle";
import { motion } from "framer-motion";
import Container from "../../../shared/Container";

const SectionC = ({ id, onObserver }) => {
  const [currentStep, setCurrentStep] = useState("1");

  const handleStepChange = (step) => setCurrentStep(step);
  const steps = [
    {
      id: "1",
      description:
        "Contribuí en el desarrollo de una plataforma de juegos Web3 con Motoko, creando un ecosistema completo.",
      icon: <FaUser className="w-3.5 h-3.5 text-green-500 dark:text-green-400" />,
      type: "article",
      title: "Desarrollador Full-Stack - Inside Dark Studior",
      listItems: [
        "Desarrollo Tecnológico: Motoko, TypeScript, JavaScript.",
        "Ecosistema Completo: Marketplace, pasarelas de pago, chats y salas de stream.",
        "Interfaz de Usuario Reactiva: React para una experiencia intuitiva.",
        "Blockchain: Garantizando transparencia y seguridad en todas las transacciones.",
        "Comunicación en Tiempo Real: Node para chats y salas de transmisión.",
      ],
      metrics: [
        { name: "Proyectos Completados", count: 10 },
        { name: "Horas de Desarrollo", count: 3120 },
        { name: "Tecnologías Implementadas", count: 10 },
      ],
      technologies: ["Motoko", "TypeScript", "JavaScript", "React", "Node.js", "Blockchain"],
    },
    {
      id: "2",
      description:
        "Desarrollo de un sistema integral de administración para proveedores de servicios de Internet (ISP/WISP).",
      type: "project",
      title: "Desarrollador de Sistema Integral - AZORDEV",
      listItems: [
        "Operación en la Nube: Desarrollé para alta disponibilidad en entornos en la nube.",
        "Gestión Remota: Implementé funcionalidades para administrar módulos de forma remota.",
        "Escalabilidad y Soporte Continuo: Contribuí a un diseño escalable con soporte online, adaptándose al crecimiento de los proveedores.",
      ],
      metrics: [
        { name: "Horas de Desarrollo", count: 2400 },
        { name: "Clientes Atendidos", count: 15 },
        { name: "Tecnologías Utilizadas", count: 3 },
      ],
      technologies: ["TypeScript", "NestJS", "MongoDB", "Tailwind CSS"],
    },
    {
      id: "3",
      description:
        "Gestión integral del proyecto y atención al cliente para el sistema de gestión de Cartelería Manna.",
      type: "project",
      title: "Product Manager y Project Manager - Cartelería Manna",
      listItems: [
        "Organización del Proyecto: Lideré la planificación y ejecución de todas las fases del proyecto, asegurando una gestión eficiente y resultados satisfactorios.",
        "Atención al Cliente: Desarrollé relaciones sólidas con el cliente, garantizando una comprensión clara de sus necesidades y expectativas.",
        "Desarrollo de Funcionalidades Clave: Contribuí al diseño y desarrollo de módulos esenciales como presupuestos, gestión de stock y nivelación de usuarios.",
        "Tecnologías Aplicadas: Coordiné el uso de tecnologías modernas para optimizar el rendimiento del sistema.",
      ],
      metrics: [
        { name: "Fases del Proyecto Gestionadas", count: 5 },
        { name: "Módulos Desarrollados", count: 8 },
        { name: "Clientes Atendidos", count: 1 },
        { name: "Tecnologías Implementadas", count: 4 },
      ],
      technologies: ["TypeScript", "NestJS", "MongoDB", "Tailwind CSS"],
    },
  ];

  return (
    <Inspector index={id} onObserver={onObserver}>
      <Section
        id={"experiencias"}
        type={"center"}
        h={"h-full"}
        title={"Experiencia Laboral"}
        positionText={"text-center"}
        extra={"gap-10 sm:gap-10 md:gap-10 lg:gap-40 py-5 sm:py-10 md:py-40"}
      >
        {steps.map((step, index) => (
          <Card
            title={step.title}
            currentStep={currentStep}
            index={step.id}
            handleStepChange={handleStepChange}
            listItems={step.listItems}
            metrics={step.metrics}
            technologies={step.technologies}
            id={index}
          />
        ))}
      </Section>
    </Inspector>
  );
};

export default SectionC;

const Card = ({
  title,
  currentStep,
  handleStepChange,
  listItems,
  metrics,
  index,
  id,
  technologies,
}) => {
  const shouldAnimate = currentStep === id;
  return (
    <Inspector index={id} onObserver={handleStepChange}>
      <Container>
        <motion.section
          initial={{ opacity: 0, x: 0 }}
          animate={shouldAnimate === true ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-2 md:gap-2 lg:gap-20 h-fit sm:h-fit md:h-fit lg:h-fit`}
        >
          <section
            className={`${
              id % 2 === 0 ? "" : "order-none sm:order-none md:order-none lg:order-1 "
            } flex  justify-center flex-col items-start h-fit`}
          >
            <TextSubTitle text={title} extra={"font-bold"} />

            <section className="flex flex-col gap-5 pt-10">
              {listItems.map((e, index) => (
                <TextBody text={e} key={index} />
              ))}
            </section>
            <section className="pt-10">
              <TextSubTitle text={"Tecnologías"} extra={"font-bold"} />

              <section className="flex flex-wrap  gap-5 pt-5">
                {technologies.map((e, index) => (
                  <TextBody text={e} key={index} />
                ))}
              </section>
            </section>
          </section>
          <motion.section
            initial={{ opacity: 0.2, x: 0 }}
            animate={shouldAnimate === true ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="sm:flex flex-col justify-center items-center h-full bg-white  bg-opacity-60 rounded-xl hidden"
          >
            <MetricsSection data={metrics} currentStep={currentStep} index={index} />
          </motion.section>
        </motion.section>
      </Container>
      <motion.section
        initial={{ opacity: 0.2, x: 0 }}
        animate={shouldAnimate === true ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center h-full bg-white  bg-opacity-60 mt-10 sm:hidden"
      >
        <Container>
          <MetricsSection data={metrics} currentStep={currentStep} index={index} />
        </Container>
      </motion.section>
    </Inspector>
  );
};
