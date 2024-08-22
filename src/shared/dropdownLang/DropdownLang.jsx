import React, { useState } from "react";
import { useLang } from "../../context/LangContext";
import TextNavbar from "../Text/TextNavbar";

const DropdownLang = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { principalLang, setPrincipalLang } = useLang();

  const dropdownItems = [
    { id: 1, language: "English (US)", type: "en" },
    { id: 2, language: "Español", type: "es" },
    // Agrega más elementos de menú según tus necesidades
  ];

  const handleChangeLanguage = (langType) => {
    setPrincipalLang(langType);
    setIsDropdownOpen(false); // Cerrar el dropdown después de cambiar el idioma
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      {/* Botón de selección de idioma */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {/* Ícono */}
        <svg
          className="w-5 h-5 rounded-full me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 3900 3900"
        >
          {/* Iconos SVG */}
          <path fill="#b22234" d="M0 0h7410v3900H0z" />
          <path
            d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
            stroke="#fff"
            strokeWidth="300"
          />
          <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
          <g fill="#fff">
            <g id="d">
              <g id="c">
                <g id="e">
                  <g id="b">
                    <path
                      id="a"
                      d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                    />
                    <use xlinkHref="#a" y="420" />
                    <use xlinkHref="#a" y="840" />
                    <use xlinkHref="#a" y="1260" />
                  </g>
                  <use xlinkHref="#a" y="1680" />
                </g>
                <use xlinkHref="#b" x="247" y="210" />
              </g>
              <use xlinkHref="#c" x="494" />
            </g>
            <use xlinkHref="#d" x="988" />
            <use xlinkHref="#c" x="1976" />
            <use xlinkHref="#e" x="2470" />
          </g>
        </svg>
        <TextNavbar text={dropdownItems.find((item) => item.type === principalLang)?.language} />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 ${
          isDropdownOpen ? "block" : "hidden"
        }`}
        id="language-dropdown-menu"
      >
        <ul className="py-2">
          {dropdownItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleChangeLanguage(item.type)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
              >
                <TextNavbar text={item.language} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownLang;
