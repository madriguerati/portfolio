import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextBody from "../Text/TextBody";
import TextSubTitle from "../Text/TextSubTitle";
import Inspector from "../Inspector/Inspector";

const ProgressBar = ({ label, value, onObserver, currentStep }) => {
  return (
    <Inspector index={label} onObserver={onObserver}>
      <section id={label} className="w-full mb-4 py-5">
        <div className="flex justify-between mb-1">
          <TextBody text={label} />
          <TextBody text={value} />
        </div>
        <div className="relative w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="absolute top-0 left-0 h-full bg-blue-500 rounded-l-full  "
            initial={{ width: 0 }}
            animate={currentStep === label && { width: `${value}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      </section>
    </Inspector>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "JavaScript",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 75 },
        { name: "Node.js", level: 80 },
        { name: "React", level: 85 },
        { name: "React Native", level: 80 },
        { name: "MongoDB", level: 70 },
        { name: "MySQL", level: 70 },
      ],
    },
    {
      category: "Java",
      skills: [
        { name: "OPP", level: 80 },
        { name: "JDBC", level: 70 },
        { name: "JPA", level: 75 },
        { name: "Spring Boot", level: 85 },
        { name: "Thymeleaf", level: 70 },
      ],
    },
    {
      category: "Design",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "Bootstrap", level: 75 },
        { name: "Angular", level: 70 },
        { name: "Sass", level: 70 },
        { name: "Less", level: 60 },
        { name: "Tailwind CSS", level: 70 },
      ],
    },
    {
      category: "Skills",
      skills: [
        { name: "GIT", level: 90 },
        { name: "VSC", level: 85 },
        { name: "Postman", level: 75 },
      ],
    },
  ];

  const [currentStep, setCurrentStep] = useState("1");
  useEffect(() => {
    console.log(currentStep);
  }, [currentStep]);

  const handleStepChange = (step) => setCurrentStep(step);

  return (
    <section className="p-8 rounded-lg w-full">
      <div>
        {skillCategories.map((category) => (
          <div key={category.category} className="mb-8">
            <TextSubTitle text={category.category} />
            {category.skills.map((skill) => (
              <ProgressBar
                key={skill.name}
                label={skill.name}
                value={skill.level}
                onObserver={handleStepChange}
                currentStep={currentStep}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
