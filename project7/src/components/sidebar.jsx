import { Grid, Search, Home, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const sidebarStyle = {
    width: "200px",
    height: "94vh",
    background: "rgba(26, 26, 26, 0.9)",
    position: "fixed",
    left: 10,
    top: 10,
    borderRadius: "10px",
    backgdropFilter: "blur(10px)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px", // Space between items
  };

  const navItemStyle = (isActive) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "background 0.2s",
    background: isActive ? "rgba(255, 255, 255, 0.1)" : "transparent",
    textDecoration: "none",
  });

  return (
    <div className="sidebar" style={sidebarStyle}>
      <div
        className="sidebar-header"
        style={{ fontSize: "1.5rem", color: "white", marginBottom: "20px" }}
      >
        Dashboard
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Link to="/" style={navItemStyle(location.pathname === "/")}>
          <Home size={20} />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/search"
          style={navItemStyle(location.pathname === "/search")}
        >
          <Search size={20} />
          <span>Search</span>
        </Link>

        <Link to="/about" style={navItemStyle(location.pathname === "/about")}>
          <Info size={20} />
          <span>About</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
