import { Link } from "react-router-dom";
import { FiArrowRight, FiMap, FiCheckCircle } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLang } from "../context/LangContext";

// Home.jsx - Landing page for the roadmap app.
// Home.jsx - Page d'accueil de l'application roadmap.
function Home({ progress }) {
  const { t } = useLang();

  return (
    <div className="page home-page">
      <Header progress={progress} />
      <main className="home-hero">
        <div className="home-hero-icon">
          <FiMap />
        </div>
        <h1>{t("heroTitle")}</h1>
        <p className="home-subtitle">{t("heroSubtitle")}</p>
        <p className="home-description">{t("heroDescription")}</p>
        {progress > 0 && (
          <div className="home-progress-resume">
            <FiCheckCircle className="resume-icon" />
            <p>
              {t("resumeProgress")} <strong>{progress}%</strong>{" "}
              {t("ofRoadmap")}
            </p>
          </div>
        )}
        <Link to="/roadmap" className="start-button">
          {t("startButton")}
          <FiArrowRight className="start-arrow" />
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
