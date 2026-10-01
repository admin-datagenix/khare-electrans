import Icon from "./Icon";
const stats = [
  ["150+", "Engineering Experts", "users"],
  ["35+", "Export Destinations", "globe"],
  ["2500+", "MVA Capacity/Year", "factory"],
  ["12", "Industry Awards", "award"],
];
export default function StatsPulse() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map(([value, label, icon]) => (
          <div className="stat" key={label}>
            <div className="stat-icon">
              <Icon name={icon === "factory" ? "settings" : icon} />
            </div>
            <div className="stat-value gradient-text">{value}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
