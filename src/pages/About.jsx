import Header from "../components/Header";
import Footer from "../components/Footer";

function About({ progress }) {
  return (
    <div className="page about-page">
      <Header progress={progress} />
      <main className="about-content">
        <h1>À propos de DevRoadmap</h1>
        <section className="about-section">
          <h2>📌 Le projet</h2>
          <p>
            DevRoadmap est un outil interactif conçu pour aider les étudiants et
            développeurs débutants à suivre leur apprentissage du développement
            web. Il propose un parcours structuré avec des étapes claires et des
            ressources de qualité.
          </p>
        </section>

        <section className="about-section">
          <h2>🎯 Pourquoi cet outil ?</h2>
          <p>
            Apprendre le développement web peut être difficile sans un plan
            clair. DevRoadmap offre une roadmap visuelle qui permet de savoir où
            l'on en est, quelles compétences restent à acquérir et quelles
            ressources consulter.
          </p>
        </section>

        <section className="about-section">
          <h2>🛠️ Technologies utilisées</h2>
          <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Vite</span>
            <span className="tech-badge">React Router</span>
            <span className="tech-badge">localStorage</span>
            <span className="tech-badge">CSS</span>
          </div>
        </section>

        <section className="about-section">
          <h2>📂 Code source</h2>
          <p>
            Le code source est disponible sur{" "}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
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
