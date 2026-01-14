import Container from "../../../shared/Container";
import Inspector from "../../../shared/Inspector/Inspector";
import Section from "../../../shared/Section/Section";
import TextBody from "../../../shared/Text/TextBody";
import TextSubTitle from "../../../shared/Text/TextSubTitle";
import SkillsSection from "../../../shared/Skills/Skills";
import TextSubTitleItalic from "../../../shared/Text/TextSubTitleItalic";

const SectionD = ({ id, onObserver }) => {
  const education = [
    {
      title: "Tecnicatura en Administración de Empresas",
      institution: "Universidad Tecnológica Nacional (UTN)",
      period: "2024 – 2026 (en curso)",
      description:
        "Formación integral en gestión estratégica, análisis financiero, coordinación de recursos humanos y procesos organizacionales. Enfoque en liderazgo, toma de decisiones y gestión en entornos públicos y privados. Fuerte enfoque en dirección de proyectos, metodologías ágiles, desarrollo y gestión, liderazgo de equipos multidisciplinarios y toma de decisiones estratégicas en entornos públicos y privados. La carrera combina herramientas de administración con competencias prácticas para la dirección y escalabilidad de productos.",
    },
    {
      title: "Ciclo Básico de Ingeniería",
      institution: "UNET",
      period: "2013 – 2016",
      description:
        "Base sólida en fundamentos de ingeniería, matemáticas aplicadas y pensamiento lógico-analítico.",
    },
  ];

  const certifications = [
    {
      title: "Java Full Stack Developer",
      institution: "EGG Education",
      description:
        "600 horas de formación intensiva en desarrollo Full-Stack con Java. Fortalecimiento de competencias técnicas en frontend, backend e integración completa de la pila tecnológica.",
    },
    {
      title: "Diplomado en Project Management",
      institution: "Universidad Tecnológica Nacional (UTN)",
      description:
        "Profundo entendimiento de la gestión de productos y proyectos en la era digital, con enfoque en planificación estratégica, ejecución y control.",
    },
    {
      title: "Diplomado en Metodologías Ágiles",
      institution: "Universidad Tecnológica Nacional (UTN)",
      description:
        "Especialización en SCRUM, Kanban y metodologías ágiles aplicadas a entornos digitales dinámicos. Desarrollo de habilidades de adaptabilidad y mejora continua de procesos.",
    },
    {
      title: "Diplomatura en Diseño y Dirección de Producto Digital",
      institution: "Universidad Tecnológica Nacional (UTN) / Modalidad complementaria",
      period: "2024",
      description:
        "Formación especializada en el diseño, dirección y gestión integral de productos digitales. Incluye metodologías de Design Thinking, UX/UI avanzado, prototipado, validación de hipótesis, roadmapping de producto, priorización de features, métricas de producto (North Star Metrics, AARRR) y liderazgo de squads multidisciplinarios. Enfoque práctico en el desarrollo y lanzamiento exitoso de aplicaciones y plataformas digitales en entornos ágiles.",
    },
    {
      title: "Arquitectura de Software",
      institution: "Udemy",
      description:
        "Profundización en diseño y desarrollo de sistemas escalables, eficientes y mantenibles a largo plazo.",
    },
    {
      title: "Clean Code",
      institution: "Udemy",
      description:
        "Especialización en escritura de código limpio, legible y fácil de mantener, siguiendo las mejores prácticas de la industria.",
    },

    {
      title: "HTML5, PHP, MySQL",
      institution: "Udemy",
      description:
        "Base sólida en desarrollo web full-stack clásico: HTML5, PHP y gestión de bases de datos relacionales con MySQL.",
    },
  ];

  return (
    <Inspector index={id} onObserver={onObserver}>
      <Section
        id="educacion"
        type="center"
        h="h-full"
        title="Educación & Formación"
        positionText="text-center"
        extra="py-32 sm:py-40 mt-20 sm:mt-40"
      >
        <Container extra="grid grid-cols-1 md:grid-cols-2 w-full gap-16 lg:gap-24">
          {/* Columna Izquierda: Educación + Experiencia + Certificados */}
          <article className="flex flex-col gap-16">
            {/* Educación Formal */}
            <section>
              <TextSubTitleItalic text="Educación Formal" extra="mb-8" />
              {education.map((edu, idx) => (
                <div key={idx} className="mb-10">
                  <TextSubTitle text={`${edu.title} — ${edu.institution}`} extra="mb-2" />
                  <TextBody text={edu.period} extra="text-sm opacity-70 mb-3" />
                  <TextBody text={edu.description} />
                </div>
              ))}
            </section>

            {/* Certificaciones */}
            <section>
              <TextSubTitleItalic text="Certificaciones & Cursos" extra="mb-8" />
              <div className="grid grid-cols-1 gap-8">
                {certifications.map((cert, idx) => (
                  <div key={idx}>
                    <TextSubTitle text={cert.title} extra="mb-2" />
                    <TextBody text={cert.institution} extra="text-sm opacity-70 mb-2" />
                    <TextBody text={cert.description} />
                  </div>
                ))}
              </div>
            </section>

            {/* Idiomas */}
            <section className="pt-8">
              <TextSubTitleItalic text="Idiomas" extra="mb-8" />
              <div className="flex flex-wrap justify-start gap-12">
                <div className="flex flex-col items-center gap-3">
                  <img
                    src="https://img.freepik.com/premium-photo/flag-united-kingdom-uk-aka-union-jack_469558-1815.jpg"
                    alt="Bandera Reino Unido"
                    className="max-w-28 rounded-lg shadow-md h-16 object-cover"
                  />
                  <TextBody text="Inglés — B1" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfC_lFaZVz5GMJaNnEESCpEJHE7DSFzWiKA&s"
                    alt="Bandera Argentina"
                    className="max-w-28 rounded-lg shadow-md h-16 object-cover"
                  />
                  <TextBody text="Español — Nativo" />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <img
                    src="https://img.freepik.com/free-vector/illustration-france-flag_53876-27099.jpg"
                    alt="Bandera Francia"
                    className="max-w-28 rounded-lg shadow-md h-16 object-cover"
                  />
                  <TextBody text="Francés — A1" />
                </div>
              </div>
            </section>
          </article>

          {/* Columna Derecha: Skills */}
          <article className="flex flex-col gap-10">
            <TextSubTitleItalic text="Habilidades Técnicas" extra="mb-6" />
            <div className="border border-gray-600/40 dark:border-gray-500/30 rounded-xl p-6 md:p-8 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
              <SkillsSection />
            </div>
          </article>
        </Container>
      </Section>
    </Inspector>
  );
};

export default SectionD;
