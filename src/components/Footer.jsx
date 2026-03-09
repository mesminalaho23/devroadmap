import { FiGithub, FiHeart } from "react-icons/fi";
import { useLang } from "../context/LangContext";

function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <p>
        <FiHeart className="footer-icon" />
        DevRoadmap &mdash; {t("footerText")} &copy;{" "}
        {new Date().getFullYear()}
      </p>
      <p className="footer-tech">
        React &middot; Vite &middot; React Router
      </p>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-github"
      >
        <FiGithub /> GitHub
      </a>
    </footer>
  );
}

export default Footer;
