import { FiGlobe, FiZap, FiCpu, FiTool } from "react-icons/fi";
import { useLang } from "../context/LangContext";

const iconMap = {
  "web-basics": FiGlobe,
  javascript: FiZap,
  react: FiCpu,
  "dev-tools": FiTool,
};

function Sidebar({ categories, activeCategory, onSelectCategory }) {
  const { t } = useLang();

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">{t("categories")}</h3>
      <ul className="sidebar-list">
        {categories.map((cat) => {
          const Icon = iconMap[cat.id] || FiGlobe;
          return (
            <li
              key={cat.id}
              className={`sidebar-item ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <Icon className="sidebar-icon" />
              <span className="sidebar-label">{t(`cat-${cat.id}`)}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
