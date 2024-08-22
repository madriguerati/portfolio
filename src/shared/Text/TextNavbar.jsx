const TextNavbar = ({ color, position, extra, text }) => {
  return (
    <p
      className={`${position} ${extra} ${
        color ? color : "text-BlackCeniza"
      }   text-md sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-lg leading-tight font-Poppins hover:text-white cursor-pointer font-bold dark:text-white`}
    >
      {text}
    </p>
  );
};

export default TextNavbar;
