import { useState } from "react";
import { FaCheck, FaUser, FaIdBadge, FaClipboardList, FaThumbsUp } from "react-icons/fa";
import Inspector from "../../../shared/Inspector/Inspector";
import MetricsSection from "../../../shared/MetricsSection";
import Section from "../../../shared/Section/Section";
import TextBody from "../../../shared/Text/TextBody";
import TextSubTitle from "../../../shared/Text/TextSubTitle";
import { motion } from "framer-motion";
import Container from "../../../shared/Container";
import TextSubTitleItalic from "../../../shared/Text/TextSubTitleItalic";

const SectionC = ({ id, onObserver }) => {
  const steps = [
    {
      id: "1",
      title: "Desarrollador Full-Stack - Inside Dark Studio",
      role: "Desarrollador Web3 para Plataforma de Juegos",
      duration: "Marzo 2023 - Junio 2024",
      description:
        "En mi rol como Desarrollador Full-Stack en Inside Dark Studio, lideré el desarrollo de una innovadora plataforma Web3 para juegos utilizando Motoko. Mi trabajo involucró la creación de un ecosistema completo que incluye un marketplace integrado, pasarelas de pago seguras, funcionalidades de chat y salas de streaming en vivo. Implementé soluciones avanzadas para asegurar una experiencia de usuario fluida y segura, utilizando las últimas tecnologías en blockchain para garantizar la transparencia y la seguridad en todas las transacciones.",
      responsibilities: [
        {
          subtitle: "Ecosistema Completo",
          text: "Diseñé y desarrollé un marketplace completo que incluye funciones de compra y venta, así como pasarelas de pago seguras para facilitar transacciones. Además, creé funcionalidades de chat y salas de stream para mejorar la interacción del usuario y proporcionar una experiencia inmersiva en la plataforma.",
        },
        {
          subtitle: "Interfaz de Usuario Reactiva",
          text: "Utilicé React para construir una interfaz de usuario intuitiva y reactiva. Implementé componentes reutilizables y gestioné el estado de la aplicación para asegurar una experiencia de usuario fluida y atractiva, adaptando la interfaz a diferentes dispositivos y resoluciones.",
        },
        {
          subtitle: "Blockchain",
          text: "Implementé soluciones basadas en blockchain para garantizar la transparencia y la seguridad en las transacciones dentro de la plataforma. Esto incluyó la gestión de activos digitales, la ejecución de contratos inteligentes y la integración de tecnologías de ledger distribuido para asegurar la integridad de los datos.",
        },
        {
          subtitle: "Comunicación en Tiempo Real",
          text: "Desarrollé y optimicé sistemas de comunicación en tiempo real utilizando Node.js. Implementé funciones para gestionar chats y transmisiones en vivo, asegurando que la plataforma proporcionara una experiencia interactiva y en tiempo real para los usuarios.",
        },
      ],
      technologies: ["Motoko", "TypeScript", "JavaScript", "React", "Node.js", "Blockchain"],
      metrics: [
        { name: "Proyectos Completados", count: 10 },
        { name: "Horas de Desarrollo", count: 3120 },
      ],
    },
    {
      id: "2",
      title: "Desarrollador Blockchain - Caniplay",
      role: "Desarrollador de Reproductor de Música Basado en Blockchain",
      duration: "Diciembre 2023 - Febrero 2024",
      description:
        "Como Desarrollador Blockchain en Caniplay, fui responsable del desarrollo de un innovador reproductor de música basado en tecnología blockchain. Mi rol incluyó diseñar una arquitectura descentralizada que proporciona seguridad y resistencia a la censura en el almacenamiento y reproducción de música. Trabajé en la integración de tecnologías avanzadas para asegurar una experiencia de usuario fluida y segura, implementando medidas de privacidad robustas y una interfaz reactiva para la reproducción descentralizada de música.",
      responsibilities: [
        {
          subtitle: "Arquitectura Descentralizada",
          text: "Diseñé una arquitectura blockchain para el almacenamiento y reproducción de música, asegurando alta seguridad y resistencia a la censura. Esto incluyó la implementación de nodos descentralizados y contratos inteligentes para gestionar el acceso y la distribución de contenido musical.",
        },

        {
          subtitle: "Interfaz Intuitiva",
          text: "Creé una interfaz de usuario intuitiva y reactiva que facilita la exploración y reproducción de música descentralizada. Esto incluyó el diseño de un sistema de navegación fácil de usar y la integración de funcionalidades de búsqueda y filtrado de música.",
        },
        {
          subtitle: "Comunicación Instantánea",
          text: "Implementé socket.io para permitir la interacción en tiempo real, facilitando la compartición instantánea de música y la comunicación entre usuarios. Esto incluyó la creación de canales de chat en vivo y la capacidad de compartir contenido musical de manera instantánea.",
        },
        {
          subtitle: "Seguridad y Privacidad",
          text: "Aplicé prácticas avanzadas de cifrado y protección de datos para asegurar la privacidad de los usuarios y la integridad del sistema. Esto incluyó la implementación de mecanismos de autenticación robustos y la encriptación de datos sensibles.",
        },
      ],
      technologies: ["TypeScript", "JavaScript", "Motoko", "React", "socket.io", "Blockchain"],
      metrics: [
        { name: "Proyectos Desarrollados", count: 1 },
        { name: "Horas de Desarrollo", count: 480 },
      ],
    },
    {
      id: "3",
      title: "Product Manager y Project Manager - Cartelería Manna",
      role: "Gestión Integral de Proyecto y Atención al Cliente",
      duration: "Junio 2022 - Septiembre 2022",
      description:
        "En mi posición como Product Manager y Project Manager en Cartelería Manna, lideré el desarrollo y la implementación de un sistema integral de gestión de cartelería. Mi rol abarcó desde la planificación y ejecución del proyecto hasta la gestión directa con el cliente. Aseguré una implementación eficiente y satisfactoria de todas las funcionalidades del sistema, incluyendo la gestión de presupuestos, el control de stock y la administración de usuarios.",
      responsibilities: [
        {
          subtitle: "Organización del Proyecto",
          text: "Coordiné todas las fases del proyecto desde la planificación inicial hasta la ejecución final. Esto incluyó la gestión de cronogramas, la asignación de recursos y la supervisión del progreso para garantizar que todos los objetivos se cumplieran de manera oportuna y eficiente.",
        },
        {
          subtitle: "Atención al Cliente",
          text: "Mantuve una comunicación constante con el cliente para comprender sus necesidades y expectativas. Trabajé para asegurar que el sistema desarrollado cumpliese con los requisitos específicos del cliente, proporcionando soporte y ajustes según fuera necesario.",
        },
        {
          subtitle: "Desarrollo de Funcionalidades Clave",
          text: "Diseñé y desarrollé módulos esenciales como la gestión de presupuestos, el control de stock y la administración de usuarios. Esto incluyó la integración de funcionalidades específicas para mejorar la eficiencia operativa y la gestión de recursos.",
        },
        {
          subtitle: "Tecnologías Aplicadas",
          text: "Supervisé la implementación de tecnologías modernas como TypeScript, NestJS, MongoDB y Tailwind CSS. Esto incluyó la selección de herramientas y tecnologías adecuadas para optimizar el rendimiento y la escalabilidad del sistema.",
        },
      ],
      technologies: ["TypeScript", "NestJS", "MongoDB", "Tailwind CSS"],
      metrics: [
        { name: "Fases del Proyecto Gestionadas", count: 5 },
        { name: "Módulos Desarrollados", count: 8 },
        { name: "Clientes Atendidos", count: 1 },
      ],
    },
    {
      id: "4",
      title: "Desarrollador de Sistema Integral - AZORDEV",
      role: "Desarrollo de Sistema Integral de Administración para ISP",
      duration: "Julio 2022 - Mayo 2023",
      description:
        "Participé en el desarrollo de un sistema integral de administración para proveedores de servicios de Internet (ISP/WISP) en AZORDEV. Mi enfoque fue en crear una solución robusta y escalable que permite a los proveedores gestionar sus operaciones de manera eficiente. Implementé funcionalidades clave para la administración remota y aseguré la alta disponibilidad del sistema en entornos en la nube.",
      responsibilities: [
        {
          subtitle: "Operación en la Nube",
          text: "Desarrollé el sistema con un enfoque en la alta disponibilidad y resiliencia en entornos de nube. Implementé estrategias para asegurar que el sistema pudiera manejar grandes volúmenes de datos y usuarios sin comprometer la estabilidad y el rendimiento.",
        },
        {
          subtitle: "Gestión Remota",
          text: "Implementé funcionalidades que permiten la administración remota de módulos, facilitando a los proveedores la gestión eficiente del sistema desde cualquier ubicación. Esto incluyó la creación de interfaces de administración y herramientas para el monitoreo remoto.",
        },
        {
          subtitle: "Escalabilidad y Soporte Continuo",
          text: "Diseñé el sistema con características escalables para adaptarse al crecimiento de los proveedores. Incluí soporte continuo para asegurar que el sistema mantuviera su estabilidad y rendimiento a largo plazo, proporcionando actualizaciones y mantenimiento regular.",
        },
      ],
      technologies: ["TypeScript", "NestJS", "MongoDB", "Tailwind CSS"],
      metrics: [
        { name: "Horas de Desarrollo", count: 2400 },
        { name: "Clientes Atendidos", count: 15 },
      ],
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
        extra={"gap-10 sm:gap-10 md:gap-10 lg:gap-40 py-32 sm:py-10 md:py-40"}
      >
        {steps.map((step, index) => (
          <Card {...step} id={step.id} />
        ))}
      </Section>
    </Inspector>
  );
};

export default SectionC;

const Card = ({
  title,
  listItems,
  metrics,
  index,
  technologies,
  responsibilities,
  description,
  duration,
  role,
}) => {
  return (
    <Container extra={"w-full"}>
      <motion.section
        className={
          "w-full sm:divide-x-2 sm:divide-Yellow flex flex-col items-start gap-20 justify-start"
        }
        initial={{ x: 48, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <section className={`w-full`}>
          <h3
            className={` text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-none font-BaskervilleItalic dark:text-white pb-10`}
          >
            {title}
          </h3>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <TextBody text={role} extra={"font-bold"} />
            <TextBody text={duration} extra={" text-end"} />
          </section>
          <section className="flex flex-col gap-5 pt-10">
            <TextBody text={description} />
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10">
            {responsibilities.map(({ subtitle, text }, index) => (
              <motion.section key={index} className="">
                <TextSubTitle text={subtitle} key={index} extra={"font-bold pb-10"} />{" "}
                <TextBody text={text} key={index} />
              </motion.section>
            ))}
          </section>
        </section>
        <section className="px-0 sm:px-10">
          <TextSubTitle text={"Tecnologías"} extra={"font-bold"} />

          <section className="flex flex-wrap  gap-5 pt-5">
            {technologies.map((e, index) => (
              <TextBody text={e} key={index} />
            ))}
          </section>
          <motion.section className="flex flex-col justify-center items-center h-full py-10">
            <MetricsSection data={metrics} />
          </motion.section>
        </section>
      </motion.section>
    </Container>
  );
};
