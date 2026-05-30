import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

function NavBar() {
  return (
    <nav className="navbar app-navbar" data-bs-theme="dark">
      <div className="container-fluid app-navbar-inner">
        <Link to={"/Home"} className="navbar-brand app-navbar-brand">
          <Flame size={20} /> Set Fire <Flame size={20} />
        </Link>
        <div className="app-navbar-links">
          <Link to={"/Menu"} className="nav-link">
            Menu
          </Link>

          <Link to={"/Contact"} className="nav-link">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
