import { FiGlobe, FiZap, FiCpu, FiTool } from "react-icons/fi";
import StepCard from "./StepCard";
import { useLang } from "../context/LangContext";

const iconMap = {
  "web-basics": FiGlobe,
  javascript: FiZap,
  react: FiCpu,
  "dev-tools": FiTool,
};

function CategoryList({ category, completedSteps, onToggle }) {
  const { t } = useLang();
  const Icon = iconMap[category.id] || FiGlobe;

  return (
    <div className="category-list">
      <div className="category-list-header">
        <Icon className="category-list-icon" />
        <h2>{t(`cat-${category.id}`)}</h2>
      </div>
      <div className="category-list-steps">
        {category.steps.map((step) => (
          <StepCard
            key={step.id}
            step={step}
            checked={completedSteps.includes(step.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
