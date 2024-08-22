import { createContext, useContext, useEffect, useState } from "react";
import { es } from "../data/es";
import { pt } from "../data/pt";
import { en } from "../data/en";

// Definir el contexto
const LangContext = createContext();

// Hook personalizado para usar el contexto
export const useLang = () => useContext(LangContext);

// Proveedor del contexto
export const LangProvider = ({ children }) => {
  // Estado para el idioma principal y la data
  const [principalLang, setPrincipalLang] = useState(() => {
    // Intenta obtener el idioma almacenado en localStorage, si no existe, usa "es" como valor predeterminado
    return localStorage.getItem("principalLang") || "es";
  });
  const [data, setData] = useState(null);
  const [loadingLang, setLoadingLang] = useState(false);

  useEffect(() => {
    // Función para cargar los datos del idioma según el idioma principal seleccionado
    const loadLanguageData = () => {
      setLoadingLang(true); // Activa el estado de carga

      switch (principalLang) {
        case "es":
          setData(es);
          break;
        case "en":
          setData(en);
          break;
        case "pt":
          setData(pt);
          break;
        default:
          setData(null);
          break;
      }

      setLoadingLang(false); // Desactiva el estado de carga una vez que se han cargado los datos
    };

    loadLanguageData(); // Llama a la función al montar o cuando cambie principalLang
  }, [principalLang]);

  // Función para cambiar el idioma
  const changeLang = (lang) => {
    try {
      setPrincipalLang(lang); // Actualiza el estado del idioma principal
      localStorage.setItem("principalLang", lang); // Guarda el idioma seleccionado en localStorage
    } catch (error) {
      console.error("Error al cambiar el idioma", error);
    }
  };

  // Envuelve los valores en un objeto para pasarlos correctamente al contexto
  const contextValues = { principalLang, setPrincipalLang, data, changeLang, loadingLang };

  return (
    <LangContext.Provider value={contextValues}>
      {loadingLang ? (
        <div>Cargando idioma...</div> // Puedes mostrar un mensaje de carga mientras se cargan los datos del idioma
      ) : (
        children // Renderiza los hijos cuando los datos del idioma estén listos
      )}
    </LangContext.Provider>
  );
};
