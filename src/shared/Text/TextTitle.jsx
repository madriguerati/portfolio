const TextTitle = ({ text, position, extra, color }) => {
  return (
    <h1
      className={`${position} ${extra} ${
        color ? color : "text-BlackCeniza"
      } text-2xl sm:text-3xl md:text-4xl  lg:text-5xl xl:text-6xl 2xl:text-5xl leading-[60px] font-Baskerville dark:text-white`}
    >
      {text}
    </h1>
  );
};

export default TextTitle;
