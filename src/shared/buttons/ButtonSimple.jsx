import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Loading from "../Loading/Loading";
import TextBody from "../Text/TextBody";

const ButtonSimple = ({
  text,
  textColor,
  border,
  display,
  func,
  w,
  loader,
  bg,
  hover,
  active,
  route,
  img,
  extra,
  type,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (func) {
      func();
    }
    if (route) {
      navigate(route);
    }
  };

  return (
    <section className={`flex justify-${display} ${w}`}>
      <motion.button
        type={type ? type : "button"}
        style={{ color: textColor }}
        onClick={handleClick}
        disabled={active}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={`${bg} ${extra} flex justify-center items-center gap-2  dark:text-white py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-lg ${border} ${hover} focus:z-10 focus:ring-4 transition-colors duration-700 ${
          active && "opacity-50 cursor-not-allowed"
        } ${w}`}
      >
        {loader ? <Loading /> : <TextBody text={text} />}
        <motion.img
          disabled={active}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          src={img}
          alt=""
          className={`${
            img ? "flex bg-Chicle dark:bg-violet-600 p-2 rounded-full w-8 h-8" : "hidden"
          }`}
        />
      </motion.button>
    </section>
  );
};

export default ButtonSimple;
