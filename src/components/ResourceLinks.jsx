import { FiExternalLink } from "react-icons/fi";

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
