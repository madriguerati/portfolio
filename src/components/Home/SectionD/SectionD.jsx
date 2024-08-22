import Container from "../../../shared/Container";
import Inspector from "../../../shared/Inspector/Inspector";
import Section from "../../../shared/Section/Section";
import TextBody from "../../../shared/Text/TextBody";
import TextSubTitle from "../../../shared/Text/TextSubTitle";
import SkillsSection from "../../../shared/Skills/Skills";
import TextSubTitleItalic from "../../../shared/Text/TextSubTitleItalic";

const SectionD = ({ id, onObserver, currentStep }) => {
  const experiences = [
    {
      title: "Java Full Stack Developer en EGG Education",
      body: "Aporté 600 horas en el desarrollo Full-Stack utilizando Java en EGG Education. Este rol me permitió fortalecer mis competencias técnicas en el manejo tanto del frontend como del backend, trabajando en proyectos que abarcan toda la pila tecnológica. Habilidades desarrolladas: Desarrollo Full-Stack, Java, integración frontend/backend.",
    },
    {
      title: "Diplomado en Project Management - UTN",
      body: "Completé un diplomado en gestión de proyectos en la Universidad Tecnológica Nacional (UTN), donde adquirí un profundo entendimiento de la gestión de productos en la era digital, enfocándome en técnicas modernas de planificación y ejecución. Habilidades desarrolladas: Gestión de proyectos, planificación, ejecución, herramientas digitales.",
    },
    {
      title: "Diplomado en Metodologías Ágiles - UTN",
      body: "Obtuve un diplomado en metodologías ágiles en UTN, desarrollando habilidades avanzadas en la gestión ágil de proyectos. Aprendí a adaptar y aplicar metodologías ágiles en entornos digitales dinámicos para mejorar la eficiencia y flexibilidad del equipo. Habilidades desarrolladas: Metodologías ágiles, SCRUM, Kanban, adaptabilidad.",
    },
    {
      title: "Arquitectura de Software - Udemy",
      body: "Realicé un curso en Udemy sobre arquitectura de software, profundizando en el diseño y desarrollo de sistemas digitales escalables y eficientes. Aprendí a crear estructuras de software que soportan el crecimiento y la evolución de las aplicaciones. Habilidades desarrolladas: Diseño de arquitectura, escalabilidad, eficiencia del software.",
    },
    {
      title: "Clean Code - Udemy",
      body: "Me especialicé en la creación de código limpio y mantenible a través de un curso en Udemy. Este curso me enseñó a escribir código que es fácil de leer, mantener y escalar, mejorando la calidad y el rendimiento de las aplicaciones. Habilidades desarrolladas: Código limpio, mantenimiento de código, buenas prácticas de programación.",
    },
    {
      title: "Bootstrap Avanzado - Universidad Austral",
      body: "Completé un curso avanzado en Bootstrap en la Universidad Austral, donde adquirí conocimientos profundos en este framework de diseño. Esto mejoró mis habilidades en el desarrollo de interfaces web responsive y atractivas. Habilidades desarrolladas: Diseño web responsive, Bootstrap avanzado, maquetación.",
    },
    {
      title: "Angular - Udemy",
      body: "Consolidé mis conocimientos en el framework Angular a través de un curso especializado en Udemy. Aprendí a desarrollar aplicaciones web dinámicas y eficientes utilizando Angular, uno de los frameworks más populares para el desarrollo frontend. Habilidades desarrolladas: Desarrollo en Angular, arquitectura frontend, aplicaciones dinámicas.",
    },
    {
      title: "HTML5, PHP, MySQL - Udemy",
      body: "Amplié mis conocimientos en tecnologías fundamentales como HTML5, PHP y MySQL mediante cursos en Udemy. Este aprendizaje me permitió dominar el desarrollo web completo, desde el diseño de la interfaz hasta la gestión de bases de datos. Habilidades desarrolladas: Desarrollo web, HTML5, PHP, MySQL, bases de datos.",
    },
    {
      title: "Spring Boot - Udemy",
      body: "Me especialicé en el desarrollo con Spring Boot a través de un curso en Udemy. Aprendí a utilizar este framework para construir aplicaciones Java modernas y robustas, optimizando el proceso de desarrollo y gestión de aplicaciones. Habilidades desarrolladas: Desarrollo con Spring Boot, aplicaciones Java, frameworks modernos.",
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
        extra={"py-5 sm:py-40 mt-20 sm:mt-40"}
      >
        <Container
          extra={" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full gap-20 "}
        >
          <article className="w-full flex flex-col gap-10 ">
            <TextSubTitleItalic text={"Educación & Idiomas"} />
            <TextBody
              text={
                " A lo largo de mi carrera, he completado varios programas educativos y cursos especializados que han contribuido a mi desarrollo profesional y personal. Aquí puedes encontrar un resumen de mis estudios y logros académicos."
              }
            />
            {experiences.map(({ title, body }, index) => (
              <article key={index} className="flex flex-col justify-start gap-10">
                <TextSubTitle text={title} />
                <TextBody text={body} />
              </article>
            ))}
            <section className="flex flex-wrap justify-start items-center gap-10 pt-5 sm:pt-5 md:pt-10 lg:pt-20">
              <article className="flex flex-col justify-center items-center gap-5">
                <img
                  src="https://img.freepik.com/premium-photo/flag-united-kingdom-uk-aka-union-jack_469558-1815.jpg"
                  alt=""
                  className="max-w-32 rounded-lg h-20"
                />
                <TextBody text={"B1"} />
              </article>
              <article className="flex flex-col justify-center items-center gap-5">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfC_lFaZVz5GMJaNnEESCpEJHE7DSFzWiKA&s"
                  alt=""
                  className="max-w-32  rounded-lg h-20"
                />
                <TextBody text={"Nativo"} />
              </article>
              <article className="flex flex-col justify-center items-center gap-5">
                <img
                  src="https://img.freepik.com/free-vector/illustration-france-flag_53876-27099.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723334400&semt=ais_hybrid"
                  alt=""
                  className="max-w-32  rounded-lg h-20"
                />
                <TextBody text={"A1"} />
              </article>
            </section>
          </article>
          <article className="flex flex-col gap-10">
            <TextSubTitleItalic text={"Skills"} />
            <article className=" flex justify-center items-start border border-gray-600 rounded-xl h-fit">
              <SkillsSection />
            </article>
          </article>
        </Container>
      </Section>
    </Inspector>
  );
};

export default SectionD;
