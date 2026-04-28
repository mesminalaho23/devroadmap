import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LangContext = createContext();

// LangContext.jsx - Language provider for translations and language switching.
// LangContext.jsx - Fournisseur de langue pour les traductions et le changement de langue.
export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("devroadmap-lang") || "fr";
  });

  useEffect(() => {
    // Persist the selected language to localStorage.
    // Persiste la langue sélectionnée dans localStorage.
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
