import { FiRefreshCw } from "react-icons/fi";
import { useLang } from "../context/LangContext";

function ResetButton({ onReset }) {
  const { t } = useLang();

  const handleReset = () => {
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
