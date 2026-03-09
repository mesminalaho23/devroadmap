function Sidebar({ categories, activeCategory, onSelectCategory }) {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Catégories</h3>
      <ul className="sidebar-list">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className={`sidebar-item ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => onSelectCategory(cat.id)}
          >
            <span className="sidebar-icon">{cat.icon}</span>
            <span className="sidebar-label">{cat.title}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
