const TextHeaderNavbar = ({ extra, text, position, color }) => {
  return (
    <p
      className={`${position} ${extra} ${
        color ? color : "text-BlackCeniza"
      }   text-md sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-4xl leading-tight font-BaskervilleItalic hover:text-white cursor-pointer font-light dark:text-white`}
    >
      {text}
    </p>
  );
};

export default TextHeaderNavbar;
