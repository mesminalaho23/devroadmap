import ResourceLinks from "./ResourceLinks";

function StepCard({ step, checked, onToggle }) {
  return (
    <div className={`step-card ${checked ? "completed" : ""}`}>
      <label className="step-card-header">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onToggle(step.id)}
        />
        <span className="step-card-title">{step.title}</span>
      </label>
      <p className="step-card-desc">{step.description}</p>
      <ResourceLinks resources={step.resources} />
    </div>
  );
}

export default StepCard;
