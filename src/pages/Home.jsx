import SectionA from "../components/sectionA/SectionA";
import SectionC from "../components/Home/sectionC/SectionC";
import SectionB from "../components/Home/sectionB/SectionB";
import { useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import SectionD from "../components/Home/SectionD/SectionD";
import SectionE from "../components/Home/sectionE/SectionE";
import SectionF from "../components/Home/SectionF/SectionF";
import Footer from "../shared/Footer/Footer";

const Home = () => {
  const [currentStep, setCurrentStep] = useState("1");

  const handleStepChange = (step) => setCurrentStep(step);
  return (
    <>
      <Navbar currentStep={currentStep} />
      <SectionA id={"Inicio"} currentStep={currentStep} onObserver={handleStepChange} />

      <SectionB id={"Sobre mí"} currentStep={currentStep} onObserver={handleStepChange} />
      <SectionC
        id={"Experiencia Laboral"}
        currentStep={currentStep}
        onObserver={handleStepChange}
      />
      <SectionD id={"Mis Conocimientos"} currentStep={currentStep} onObserver={handleStepChange} />
      <SectionE
        id={"Mi Curriculum Vitae"}
        currentStep={currentStep}
        onObserver={handleStepChange}
      />
      <SectionF id={"contacto"} currentStep={currentStep} onObserver={handleStepChange} />
    </>
  );
};

export default Home;
