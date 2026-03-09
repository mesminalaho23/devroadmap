import { Link, useLocation } from "react-router-dom";

function Header({ progress }) {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <span className="header-logo-icon">🗺️</span>
        <span className="header-logo-text">DevRoadmap</span>
      </Link>
      <nav className="header-nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Accueil
        </Link>
        <Link
          to="/roadmap"
          className={location.pathname === "/roadmap" ? "active" : ""}
        >
          Roadmap
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          À propos
        </Link>
      </nav>
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
    </header>
  );
}

export default Header;
