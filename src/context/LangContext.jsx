import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("devroadmap-lang") || "fr";
  });

  useEffect(() => {
    localStorage.setItem("devroadmap-lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const t = (key) => {
    return translations[lang]?.[key] || key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
