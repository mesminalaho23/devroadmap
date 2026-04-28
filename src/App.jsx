import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import About from "./pages/About";
import roadmapData from "./data/roadmapData";
import "./styles.css";

// App.jsx - Main application component
// App.jsx - Composant principal de l'application
// This component manages global state, routing and progress persistence.
const STORAGE_KEY = "devroadmap-progress";

function App() {
  const [completedSteps, setCompletedSteps] = useState(() => {
    // Load saved progress from localStorage when the app starts
    // Charge la progression sauvegardée depuis localStorage au démarrage
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Save progress in localStorage whenever completedSteps changes
    // Sauvegarde la progression dans localStorage à chaque changement de completedSteps
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedSteps));
  }, [completedSteps]);

  const handleToggleStep = (stepId) => {
    // Toggle the completion state of a roadmap step.
    // Basculer l'état de complétion d'une étape de la roadmap.
    setCompletedSteps((prev) =>
      prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId]
    );
  };

  const handleReset = () => {
    // Reset all completed steps and clear saved progress.
    // Réinitialise toutes les étapes complétées et efface la progression sauvegardée.
    setCompletedSteps([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const totalSteps = roadmapData.reduce((sum, c) => sum + c.steps.length, 0);
  // Calculate user progress as a percentage of completed steps.
  // Calcule la progression de l'utilisateur en pourcentage d'étapes complétées.
  const progress =
    totalSteps === 0
      ? 0
      : Math.round((completedSteps.length / totalSteps) * 100);

  return (
    <ThemeProvider>
      <LangProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home progress={progress} />} />
            <Route
              path="/roadmap"
              element={
                <Roadmap
                  completedSteps={completedSteps}
                  onToggleStep={handleToggleStep}
                  onReset={handleReset}
                  progress={progress}
                />
              }
            />
            <Route path="/about" element={<About progress={progress} />} />
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
