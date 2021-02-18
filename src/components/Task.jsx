import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";

function Task(props) {
  const [checked, setChecked] = useState(false);

  const deleteTask = async () => {
    const taskURL = `${baseURL}/${props.task.id}`;
    setChecked(true);
    setTimeout(async () => {
      await axios.delete(taskURL, config);

      props.setToggleFetch((curr) => !curr);
    }, 1000);
  };

  return (
    <div className="indiv-task">
      <input
        key={props.task.fields.id}
        type="checkbox"
        id="title"
        value={checked}
        onClick={deleteTask}
      />
      <label
        style={{ textDecoration: checked ? "line-through" : "none" }}
        htmlFor="title"
      >
        {props.task.fields.title}
      </label>
    </div>
  );
}

export default Task;
