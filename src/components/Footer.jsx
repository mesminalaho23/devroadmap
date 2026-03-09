function Footer() {
  return (
    <footer className="footer">
      <p>
        DevRoadmap &mdash; Projet académique &copy; {new Date().getFullYear()}
      </p>
      <p className="footer-tech">
        React &middot; Vite &middot; React Router
      </p>
    </footer>
  );
}

export default Footer;
