import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProgressBar from "../components/ProgressBar";
import CategoryList from "../components/CategoryList";
import ResetButton from "../components/ResetButton";
import Footer from "../components/Footer";
import roadmapData from "../data/roadmapData";

function Roadmap({ completedSteps, onToggleStep, onReset, progress }) {
  const [activeCategory, setActiveCategory] = useState(roadmapData[0].id);

  const currentCategory = roadmapData.find((c) => c.id === activeCategory);
  const totalSteps = roadmapData.reduce((sum, c) => sum + c.steps.length, 0);

  return (
    <div className="page roadmap-page">
      <Header progress={progress} />
      <div className="roadmap-layout">
        <Sidebar
          categories={roadmapData}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <main className="roadmap-main">
          <ProgressBar completed={completedSteps.length} total={totalSteps} />
          <CategoryList
            category={currentCategory}
            completedSteps={completedSteps}
            onToggle={onToggleStep}
          />
          <div className="roadmap-actions">
            <ResetButton onReset={onReset} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Roadmap;
