import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import TextNavbar from "../Text/TextNavbar";
import { useLang } from "../../context/LangContext";
import { scrollToSection } from "../../utils/function";

const Drawer = () => {
  // Estado para controlar la visibilidad del drawer
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir el drawer
  const openDrawer = () => {
    setIsOpen(true);
  };

  // Función para cerrar el drawer
  const closeDrawer = () => {
    setIsOpen(false);
  };

  const { data } = useLang();

  // Función para manejar el clic en una opción del menú
  const handleMenuClick = (link) => {
    scrollToSection(link);
    closeDrawer(); // Cierra el drawer después de hacer clic en la opción
  };

  return (
    <>
      <div className="text-center flex justify-center items-center">
        <button onClick={openDrawer}>
          <MdMenu size={30} />
        </button>
      </div>

      <div
        id="drawer-right-example"
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-white w-80 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <button
          type="button"
          onClick={closeDrawer}
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 left-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <section className="py-20 flex flex-col gap-10">
          {data?.navbar?.items.map((e) => (
            <section key={e.name} onClick={() => handleMenuClick(e.link)}>
              <TextNavbar text={e.name} />
            </section>
          ))}
        </section>
      </div>
    </>
  );
};

export default Drawer;
