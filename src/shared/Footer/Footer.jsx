import Container from "../Container";
import TextBody from "../Text/TextBody";
import TextSubTitle from "../Text/TextSubTitle";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-300 dark:bg-blue-400">
        <Container extra={""}>
          <div className=" py-6  md:flex md:items-center md:justify-center">
            <section className="text-sm text-gray-500 dark:text-gray-300 sm:text-center flex  items-center gap-2">
              <TextBody text={" © 2024 "} />{" "}
              <a href="https://neurons.com.ar">
                <TextSubTitle text={"Neurons"} />
              </a>
              <TextBody text={"Desarrollada con ❤️ desde Argentina."} />
            </section>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
