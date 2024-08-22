import Inspector from "../../../shared/Inspector/Inspector";
import Section from "../../../shared/Section/Section";
import TextBody from "../../../shared/Text/TextBody";
import qre from "/public/img/qre.png";

const SectionE = ({ id, onObserver }) => {
  return (
    <Inspector index={id} onObserver={onObserver}>
      <Section id={id} extra={"py-40 gap-20"}>
        {/* <TextTitle text={"Mi Curriculum Vitae"} /> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1opqos7gKpLhMZ-cUV5ZFcCiD3aq450mE/view?usp=sharing"
          className="py-2"
        >
          <img src={qre} alt="" className="max-w-80" />
        </a>
        <TextBody text={"Cliquea o escanea el código QR"} />
      </Section>
    </Inspector>
  );
};

export default SectionE;
