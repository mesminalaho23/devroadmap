import {
  FiTarget,
  FiHelpCircle,
  FiLayers,
  FiFolder,
  FiGithub,
} from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLang } from "../context/LangContext";

// About.jsx - Page that explains the purpose of the app.
// About.jsx - Page qui explique le but de l'application.
function About({ progress }) {
  const { t } = useLang();

  return (
    <div className="page about-page">
      <Header progress={progress} />
      <main className="about-content">
        <h1>{t("aboutTitle")}</h1>

        <section className="about-section">
          <h2>
            <FiTarget className="about-icon" />
            {t("aboutProjectTitle")}
          </h2>
          <p>{t("aboutProjectText")}</p>
        </section>

        <section className="about-section">
          <h2>
            <FiHelpCircle className="about-icon" />
            {t("aboutWhyTitle")}
          </h2>
          <p>{t("aboutWhyText")}</p>
        </section>

        <section className="about-section">
          <h2>
            <FiLayers className="about-icon" />
            {t("aboutTechTitle")}
          </h2>
          <div className="tech-stack">
            <span className="tech-badge">⚛️ React</span>
            <span className="tech-badge">⚡ Vite</span>
            <span className="tech-badge">🔀 React Router</span>
            <span className="tech-badge">💾 localStorage</span>
            <span className="tech-badge">🎨 CSS</span>
          </div>
        </section>

        <section className="about-section">
          <h2>
            <FiFolder className="about-icon" />
            {t("aboutSourceTitle")}
          </h2>
          <p>
            {t("aboutSourceText")}{" "}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="inline-icon" /> GitHub
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
