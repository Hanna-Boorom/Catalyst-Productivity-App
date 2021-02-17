import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      title,
      isCompleted,
    };
    await axios.post(baseURL, { newTask }, config);
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <div className="task-input-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-input"></label>
        <input
          id="task-input"
          type="textarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <nav className="form-nav">
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Form;
