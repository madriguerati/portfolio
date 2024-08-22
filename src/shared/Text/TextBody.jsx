import React from "react";

const TextBody = ({ text, position, color, extra }) => {
  return (
    <p
      className={`${position} ${extra} ${
        color ? color : "text-BlackCeniza"
      }   text-md sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-xl leading-tight font-Poppins dark:text-white`}
    >
      {text}
    </p>
  );
};

export default TextBody;
