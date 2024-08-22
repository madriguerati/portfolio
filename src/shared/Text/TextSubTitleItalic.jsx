const TextSubTitleItalic = ({ text, position, extra, color }) => {
  return (
    <h3
      className={`${position} ${extra} ${
        color ? color : "text-BlackCeniza"
      } text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl leading-none font-BaskervilleItalic dark:text-white`}
    >
      {text}
    </h3>
  );
};

export default TextSubTitleItalic;
