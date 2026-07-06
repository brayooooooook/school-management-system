import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        backgroundColor: "#1f2937",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Smart School</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </Link>

        <Link to="/learners" style={{ color: "white", textDecoration: "none" }}>
          Learners
        </Link>

        <Link to="/classes" style={{ color: "white", textDecoration: "none" }}>
          Classes
        </Link>

        <Link to="/subjects" style={{ color: "white", textDecoration: "none" }}>
          Subjects
        </Link>

        <Link to="/marks" style={{ color: "white", textDecoration: "none" }}>
          Marks
        </Link>

        <Link to="/reports" style={{ color: "white", textDecoration: "none" }}>
          Reports
        </Link>

        <Link to="/settings" style={{ color: "white", textDecoration: "none" }}>
          Settings
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
