import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from "../../hooks/useDarkMode";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div className={`grid place-content-center px-4 transition-colors `}>
      <SliderToggle selected={darkMode} setSelected={setDarkMode} />
    </div>
  );
};

const SliderToggle = ({ selected, setSelected }) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${selected === "light" ? "text-white" : "text-black"}`}
        onClick={() => setSelected(!selected)}
      >
        <FiSun className="relative z-10 text-lg md:text-lg " />
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${selected === "dark" ? "text-white" : "text-white"}`}
        onClick={() => {
          setSelected("dark");
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-lg" />
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-start" : "justify-end"
        }`}
      >
        <span
          className={`h-full w-1/2 rounded-full  ${selected ? "bg-yellow-300" : "bg-gray-800"}`}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
