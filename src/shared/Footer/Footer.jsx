import Container from "../Container";
import TextBody from "../Text/TextBody";
import TextSubTitle from "../Text/TextSubTitle";

const Footer = ({ extra }) => {
  return (
    <>
      <footer className={` ${extra}`}>
        <Container extra={""}>
          <div className=" py-6  md:flex md:items-center md:justify-center">
            <TextBody
              text={"Desarrollada con ❤️ desde Argentina."}
              extra={"flex sm:hidden md:hidden"}
            />
            <section className="text-sm text-gray-500 dark:text-gray-300 sm:text-center flex  items-center gap-2">
              <TextBody text={" © 2024 "} />{" "}
              <a href="https://neurons.com.ar">
                <TextSubTitle text={"Neurons"} />
              </a>
              <TextBody
                text={"Desarrollada con ❤️ desde Argentina."}
                extra={"hidden sm:hidden md:flex"}
              />
            </section>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
