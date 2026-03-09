import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home({ progress }) {
  return (
    <div className="page home-page">
      <Header progress={progress} />
      <main className="home-hero">
        <h1>
          🗺️ <span>DevRoadmap</span>
        </h1>
        <p className="home-subtitle">
          Votre guide interactif pour apprendre le développement web étape par
          étape.
        </p>
        <p className="home-description">
          Suivez votre progression, cochez les compétences acquises et accédez à
          des ressources de qualité pour chaque technologie.
        </p>
        {progress > 0 && (
          <div className="home-progress-resume">
            <p>
              Vous avez déjà complété <strong>{progress}%</strong> de la
              roadmap !
            </p>
          </div>
        )}
        <Link to="/roadmap" className="start-button">
          🚀 Commencer la Roadmap
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
