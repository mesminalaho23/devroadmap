function ProgressBar({ completed, total }) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-info">
        <span>Progression</span>
        <span>
          {completed}/{total} étapes &mdash; {percent}%
        </span>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
