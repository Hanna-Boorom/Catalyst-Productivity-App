import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Add a To Do</Link>
    </nav>
  );
}

export default Nav;
