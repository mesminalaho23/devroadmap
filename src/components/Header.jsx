import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiMap } from "react-icons/fi";
import { HiOutlineHome, HiOutlineInformationCircle } from "react-icons/hi";
import { BiMapAlt } from "react-icons/bi";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";

function Header({ progress }) {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <FiMap className="header-logo-icon" />
        <span className="header-logo-text">DevRoadmap</span>
      </Link>

      <nav className="header-nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <HiOutlineHome className="nav-icon" />
          <span>{t("home")}</span>
        </Link>
        <Link
          to="/roadmap"
          className={location.pathname === "/roadmap" ? "active" : ""}
        >
          <BiMapAlt className="nav-icon" />
          <span>{t("roadmap")}</span>
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          <HiOutlineInformationCircle className="nav-icon" />
          <span>{t("about")}</span>
        </Link>
      </nav>

      <div className="header-actions">
        {progress !== undefined && (
          <div className="header-progress">
            <span className="header-progress-label">{progress}%</span>
            <div className="header-progress-bar">
              <div
                className="header-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <button
          className="icon-button"
          onClick={toggleLang}
          title={lang === "fr" ? "Switch to English" : "Passer en français"}
        >
          {lang === "fr" ? "🇬🇧" : "🇫🇷"}
        </button>

        <button
          className="icon-button"
          onClick={toggleTheme}
          title={theme === "light" ? "Dark mode" : "Light mode"}
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>
      </div>
    </header>
  );
}

export default Header;
