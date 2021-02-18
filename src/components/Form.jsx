import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [title, setTitle] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      fields: {
        title,
      },
    };

    await axios.post(baseURL, newTask, config);
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
        {/* <button type="submit">Let's Do This!</button> */}
      </form>
    </div>
  );
}

export default Form;
