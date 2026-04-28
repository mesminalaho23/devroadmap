import { FiRefreshCw } from "react-icons/fi";
import { useLang } from "../context/LangContext";

// ResetButton.jsx - Button to clear the user's roadmap progress.
// ResetButton.jsx - Bouton pour effacer la progression de la roadmap.
function ResetButton({ onReset }) {
  const { t } = useLang();

  const handleReset = () => {
    // Confirm before resetting progress.
    // Confirme avant de réinitialiser la progression.
    if (window.confirm(t("resetConfirm"))) {
      onReset();
    }
  };

  return (
    <button className="reset-button" onClick={handleReset}>
      <FiRefreshCw className="reset-icon" />
      {t("resetButton")}
    </button>
  );
}

export default ResetButton;
