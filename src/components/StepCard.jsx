import { FiCheckCircle, FiCircle } from "react-icons/fi";
import ResourceLinks from "./ResourceLinks";
import { useLang } from "../context/LangContext";

// StepCard.jsx - Represents a single roadmap step with checkbox and links.
// StepCard.jsx - Représente une étape de la roadmap avec une case à cocher et des liens.
function StepCard({ step, checked, onToggle }) {
  const { t } = useLang();

  return (
    <div className={`step-card ${checked ? "completed" : ""}`}>
      <div className="step-card-header" onClick={() => onToggle(step.id)}>
        <span className="step-card-check">
          {checked ? (
            <FiCheckCircle className="check-icon checked" />
          ) : (
            <FiCircle className="check-icon" />
          )}
        </span>
        <span className="step-card-title">
          {t(`step-${step.id}`)}
        </span>
      </div>
      <p className="step-card-desc">{t(`desc-${step.id}`)}</p>
      <ResourceLinks resources={step.resources} />
    </div>
  );
}

export default StepCard;
