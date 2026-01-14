import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import TextBody from "../../../shared/Text/TextBody";
import TextSubTitle from "../../../shared/Text/TextSubTitle";
import MetricsSection from "../../../shared/MetricsSection";
import ExperienceSection from "../PaginaPrueba"; // Asegúrate que este sea el componente del carrusel

const SectionC = ({ id, onObserver }) => {
  const steps = [
    {
      id: 1,
      company: "Bretit",
      position: "Desarrollador Full-Stack",
      period: "Enero 2025 – Presente",
      duration: "Actual",
      description:
        "Actualmente formo parte del equipo principal de desarrollo de Bretit, una plataforma SaaS de gestión comercial diseñada para optimizar procesos de ventas, seguimiento de clientes y organización diaria de equipos comerciales. Lidero la evolución continua de la aplicación web y móvil, implementando nuevas funcionalidades clave y mejorando la experiencia de usuario para vendedores, gerentes y empresarios.",
      highlights: [
        "Desarrollo y mantenimiento de interfaces intuitivas tanto en web como en aplicaciones móviles nativas (iOS y Android) con React y React Native",
        "Implementación de sistemas de notificaciones push en tiempo real y calendarios inteligentes sincronizados",
        "Creación de vistas personalizadas de agenda y pipeline de ventas para mejorar la productividad de los equipos comerciales",
        "Optimización constante de rendimiento y experiencia de usuario en todos los dispositivos",
      ],
      technologies: ["React", "React Native", "Node.js", "TypeScript", "Firebase", "Redux Toolkit"],
    },

    {
      id: 2,
      company: "Inside Dark Studio",
      position: "Desarrollador Web3 / Full-Stack",
      period: "Marzo 2023 – Junio 2024",
      duration: "1 año 4 meses",
      description:
        "Lideré el desarrollo técnico completo de una innovadora plataforma de juegos blockchain basada en Internet Computer (ICP), creando un ecosistema integral que combina gaming, economía digital y comunidad interactiva. La plataforma incluye marketplace NFT, sistema de pagos descentralizados, chat en tiempo real y salas de streaming en vivo integradas directamente en la blockchain.",
      highlights: [
        "Arquitectura completa Web3 utilizando Motoko como lenguaje principal en Internet Computer",
        "Diseño e implementación de un marketplace funcional con compra/venta de activos digitales y pasarelas de pago seguras",
        "Desarrollo de sistemas de comunicación en tiempo real (chat grupal y privado + salas de streaming)",
        "Interfaz de usuario moderna y altamente reactiva construida con React y TypeScript",
        "Garantía de transparencia y seguridad en todas las transacciones mediante contratos inteligentes en blockchain",
      ],
      technologies: [
        "Motoko",
        "Internet Computer (ICP)",
        "TypeScript",
        "React",
        "Node.js",
        "WebSocket",
        "Blockchain",
      ],
    },

    {
      id: 3,
      company: "Caniplay",
      position: "Desarrollador Blockchain (Freelance)",
      period: "Noviembre 2023 – Enero 2024",
      duration: "3 meses",
      description:
        "Proyecto freelance para desarrollar un reproductor de música completamente descentralizado y resistente a censura, utilizando tecnología blockchain para el almacenamiento, distribución y monetización de contenido musical. El enfoque principal fue crear una experiencia fluida para artistas y oyentes mientras se garantizaba la inmutabilidad y privacidad de los datos.",
      highlights: [
        "Diseño de arquitectura descentralizada con almacenamiento en blockchain (Motoko)",
        "Implementación de contratos inteligentes para gestión de derechos, reproducción y micropagos",
        "Desarrollo de interfaz intuitiva y reactiva para búsqueda, playlists y reproducción continua",
        "Sistema de comunicación en tiempo real para compartir tracks y comentarios entre usuarios",
        "Aplicación estricta de mejores prácticas de privacidad y cifrado de datos sensibles",
      ],
      technologies: ["Motoko", "TypeScript", "React", "socket.io", "Blockchain", "IPFS"],
    },

    {
      id: 4,
      company: "Neurons",
      position: "Project Manager & Desarrollador Full-Stack",
      period: "Marzo 2023 – Noviembre 2023",
      duration: "9 meses (roles combinados)",
      description:
        "En Neurons trabajé en proyectos digitales de alto impacto, comenzando como desarrollador full-stack y evolucionando rápidamente a Project Manager gracias a mi capacidad de organización y liderazgo técnico. Coordiné equipos multidisciplinarios, gestioné entregas a clientes y simultáneamente contribuí al desarrollo técnico de varias plataformas.",
      highlights: [
        "Transición exitosa de desarrollador a Project Manager en menos de 6 meses",
        "Liderazgo y coordinación de equipos de diseño, desarrollo frontend/backend y QA",
        "Desarrollo de aplicaciones web y móviles escalables con React, Node.js y PostgreSQL",
        "Implementación de soluciones blockchain en proyectos seleccionados",
        "Optimización de rendimiento, SEO técnico y diseño de experiencias de usuario (UI/UX)",
        "Gestión integral de plazos, presupuestos y comunicación directa con clientes",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Blockchain", "Agile/Scrum"],
    },

    {
      id: 5,
      company: "AZORDEV",
      position: "Desarrollador Full-Stack",
      period: "Julio 2022 – Mayo 2023",
      duration: "11 meses",
      description:
        "Desarrollo de un sistema integral de gestión en la nube para proveedores de servicios de Internet (ISP/WISP), enfocado en alta disponibilidad, escalabilidad y facilidad de administración remota. La plataforma permitió a decenas de empresas gestionar clientes, facturación, monitoreo de red y soporte técnico desde una única interfaz moderna.",
      highlights: [
        "Diseño y desarrollo de arquitectura cloud con alta disponibilidad y recuperación automática",
        "Implementación de paneles de administración remota y monitoreo en tiempo real",
        "Creación de sistemas escalables capaces de soportar crecimiento sostenido de usuarios",
        "Mantenimiento y soporte continuo post-lanzamiento con actualizaciones frecuentes",
      ],
      technologies: ["TypeScript", "NestJS", "MongoDB", "Tailwind CSS", "Docker", "AWS"],
    },

    {
      id: 6,
      company: "Cartelería Manna",
      position: "Product & Project Manager",
      period: "Junio 2022 – Septiembre 2022",
      duration: "4 meses",
      description:
        "Responsable de la gestión integral y ejecución de un proyecto de sistema de cartelería digital para puntos de venta. Desde la definición de requisitos hasta la entrega final, coordiné el desarrollo, pruebas y puesta en producción, asegurando el cumplimiento de expectativas del cliente en tiempo y forma.",
      highlights: [
        "Gestión completa del ciclo de vida del proyecto (planificación → ejecución → entrega)",
        "Diseño y supervisión del desarrollo de módulos clave: presupuestos, inventario y gestión de usuarios",
        "Comunicación directa y constante con el cliente para ajustes y validaciones",
        "Implementación exitosa con cero interrupciones en el negocio del cliente",
      ],
      technologies: ["TypeScript", "NestJS", "MongoDB", "Tailwind CSS", "Figma"],
    },
    {
      id: 7,
      company: "",
      position: "",
      period: "",
      duration: "",
      description: "",
      highlights: [],
      technologies: [],
    },
    {
      id: 8,
      company: "",
      position: "",
      period: "",
      duration: "",
      description: "",
      highlights: [],
      technologies: [],
    },
  ];

  return <ExperienceSection experiences={steps} />;
};

export default SectionC;
