function ResetButton({ onReset }) {
  const handleReset = () => {
    if (window.confirm("Voulez-vous vraiment réinitialiser votre progression ?")) {
      onReset();
    }
  };

  return (
    <button className="reset-button" onClick={handleReset}>
      🔄 Réinitialiser
    </button>
  );
}

export default ResetButton;
