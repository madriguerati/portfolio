import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Floating = ({ children }) => {
  const y1 = useSpring(useTransform(scrollY, [0, 1000], [0, -60]), { stiffness: 50, damping: 15 });
  const rotate1 = useSpring(useTransform(scrollY, [0, 1000], [0, 360]), {
    stiffness: 50,
    damping: 15,
  });
  return (
    <motion.section
      className="absolute top-28 right-10 z-0 opacity-10 w-40"
      style={{ y: y1, rotate: rotate1 }}
    >
      {children}
    </motion.section>
  );
};

export default Floating;
