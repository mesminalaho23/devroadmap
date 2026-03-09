import StepCard from "./StepCard";

function CategoryList({ category, completedSteps, onToggle }) {
  return (
    <div className="category-list">
      <div className="category-list-header">
        <span className="category-list-icon">{category.icon}</span>
        <h2>{category.title}</h2>
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
