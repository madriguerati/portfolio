const TextSubTitle = ({ text, position, extra, color }) => {
  return (
    <h2
      className={`${position} ${extra} ${
        color ? color : "text-BlackCeniza"
      } text-xl sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl leading-normal font-Baskerville dark:text-white`}
    >
      {text}
    </h2>
  );
};

export default TextSubTitle;
