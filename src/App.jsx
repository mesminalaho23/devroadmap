import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import About from "./pages/About";
import roadmapData from "./data/roadmapData";
import "./styles.css";

const STORAGE_KEY = "devroadmap-progress";

function App() {
  const [completedSteps, setCompletedSteps] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedSteps));
  }, [completedSteps]);

  const handleToggleStep = (stepId) => {
    setCompletedSteps((prev) =>
      prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId]
    );
  };

  const handleReset = () => {
    setCompletedSteps([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const totalSteps = roadmapData.reduce((sum, c) => sum + c.steps.length, 0);
  const progress =
    totalSteps === 0
      ? 0
      : Math.round((completedSteps.length / totalSteps) * 100);

  return (
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
  );
}

export default App;
