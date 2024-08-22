import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextSubTitle from "../Text/TextSubTitle";
import TextNavbar from "../Text/TextNavbar";
import TextHeaderNavbar from "../Text/TextHeaderNavbar";
import DarkModeToggle from "../toggleDarkMode/ToggleDarkMode";
import DropdownLang from "../dropdownLang/DropdownLang";
import { es } from "../../data/es";
import { scrollToSection } from "../../utils/function";
import Container from "../Container";
import Drawer from "../Drawer/Drawer";

const Navbar = ({ currentStep }) => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState("");
  const [showFullMenu, setShowFullMenu] = useState(true);
  const { items, logo } = es.navbar;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
      setScrollY(currentScrollY);

      if (scrollDirection === "down") {
        setShowFullMenu(false);
      } else {
        setShowFullMenu(true);
      }

      setLastScrollY(currentScrollY);

      let sectionTitle = "";
      items.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (
          sectionElement &&
          sectionElement.offsetTop <= currentScrollY + 60 &&
          sectionElement.offsetTop + sectionElement.offsetHeight > currentScrollY + 60
        ) {
          sectionTitle = section;
        }
      });
      setCurrentSection(sectionTitle);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, items]);

  return (
    <section
      className={`fixed top-0 left-0 flex justify-center w-full text-white  z-40 ${
        currentStep === "contacto" ? "hidden transition" : ""
      }`}
    >
      <motion.section
        className={`flex justify-between items-center h-20 transition-all duration-300 `}
        initial={{
          backgroundColor: "rgba(33, 150, 243, 0)",
          width: "90%",
          borderRadius: "1rem",
        }}
        animate={{
          backgroundColor: scrollY > 10 ? "rgba(33, 150, 243, 1)" : "rgba(33, 150, 243, 0)",
          width: scrollY > 10 ? "100%" : "100%",
          marginTop: scrollY > 10 ? "0" : "0.5rem",
          borderRadius: scrollY > 10 ? "0" : "0",
        }}
        transition={{ duration: 0.3 }}
      >
        <Container extra={"flex justify-between w-full items-center"}>
          {scrollY > 10 ? (
            <TextSubTitle text={currentStep} color={"text-white"} />
          ) : (
            <TextSubTitle text={logo} color={"text-black"} />
          )}

          <motion.section
            className={`hidden sm:hidden md:hidden lg:flex justify-center items-center gap-10 transition-opacity duration-300 ${
              showFullMenu ? "opacity-100" : "opacity-0"
            }`}
          >
            {items.map(({ link, name }) => (
              <section key={link} onClick={() => scrollToSection(link)}>
                <TextNavbar text={name} key={link} />
              </section>
            ))}
          </motion.section>
          <section className="flex justify-center items-center gap-0">
            {/* <section className="hidden sm:hidden md:flex">
              <DropdownLang />
            </section> */}
            <section className="hidden sm:hidden md:flex">
              <DarkModeToggle />
            </section>
            <section className="flex sm:flex md:flex lg:hidden ">
              <Drawer />
            </section>
          </section>
        </Container>
      </motion.section>
    </section>
  );
};

export default Navbar;
