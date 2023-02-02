import { Link } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="navbar main-nav bg-primary">
      <Link to="/" className="nav-logo-text">
        <h4 className="text-secondary">Github API</h4>
      </Link>
    </div>
  );
};

export default NavBar;
