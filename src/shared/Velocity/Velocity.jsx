import { motion } from "framer-motion";

import TextTitle from "../Text/TextTitle";

const Velocity = ({ left, right, extra, children, duration }) => {
  return (
    <section className={`relative h-fit  overflow-hidden w-full p-0 m-0 `}>
      <motion.div
        initial={{ x: right }}
        animate={{ x: left }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className={`${extra} w-full flex `}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Velocity;
