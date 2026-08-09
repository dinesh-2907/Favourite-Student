import { Link } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Navbar() {
  const { favourites } = useContext(StudentContext);

  return (
    <nav className="navbar">
      <h2>Student App</h2>

      <div className="nav-links">
        <Link to="/">Student List</Link>

        <Link to="/favourites">
          Favourite Students ({favourites.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;