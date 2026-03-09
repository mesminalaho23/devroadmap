import { FiTrendingUp } from "react-icons/fi";
import { useLang } from "../context/LangContext";

function ProgressBar({ completed, total }) {
  const { t } = useLang();
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-info">
        <span className="progress-bar-label">
          <FiTrendingUp className="progress-icon" />
          {t("progression")}
        </span>
        <span>
          {completed}/{total} {t("steps")} &mdash; {percent}%
        </span>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
