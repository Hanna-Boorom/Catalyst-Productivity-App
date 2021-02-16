import { Link } from "react-router-dom";

function Form() {
  return (
    <div className="task-input-form">
      <form>
        <label htmlFor="task-input"></label>
        <input id="task-input" type="textarea" />
      </form>
      <nav className="form-nav">
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Form;
