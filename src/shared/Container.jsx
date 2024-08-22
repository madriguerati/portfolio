import React from "react";

const Container = ({ children, extra }) => {
  return (
    <section
      className={`px-5 sm:px-5 md:px-10 lg:px-10 xl:px-40 2xl:px-40    3xl:px-80 w ${extra} `}
    >
      {children}
    </section>
  );
};

export default Container;
