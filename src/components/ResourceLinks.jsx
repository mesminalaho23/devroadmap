import { FiExternalLink } from "react-icons/fi";

// ResourceLinks.jsx - Displays a list of external resource links for each step.
// ResourceLinks.jsx - Affiche une liste de liens de ressources externes pour chaque étape.
function ResourceLinks({ resources }) {
  if (!resources || resources.length === 0) return null;

  return (
    <ul className="resource-links">
      {resources.map((res, i) => (
        <li key={i}>
          <a href={res.url} target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="resource-icon" />
            {res.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ResourceLinks;
