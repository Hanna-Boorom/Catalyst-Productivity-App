import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Add a Task</Link>
    </nav>
  );
}

export default Nav;
