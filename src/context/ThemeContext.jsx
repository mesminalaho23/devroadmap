import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

// ThemeContext.jsx - Theme provider for light/dark mode.
// ThemeContext.jsx - Fournisseur de thème pour le mode clair/sombre.
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("devroadmap-theme") || "light";
  });

  useEffect(() => {
    // Apply the selected theme to the root element and persist it.
    // Applique le thème sélectionné à l'élément racine et le persiste.
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("devroadmap-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
