const Section = ({ id, children, type, h, title, positionText, extra }) => {
  let content;
  switch (type) {
    case "center":
      content = (
        <section
          id={id}
          className={`flex flex-col  justify-center items-center relative ${h} ${extra} `}
        >
          {children}
        </section>
      );
      break;

    default:
      content = (
        <section
          id={id}
          className={`flex flex-col  justify-center items-center relative ${h} ${extra} `}
        >
          {children}
        </section>
      );
      break;
  }

  return content;
};

export default Section;
