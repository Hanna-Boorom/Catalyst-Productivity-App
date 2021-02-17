import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";

function Task(props) {
  // const [checked, setChecked] = useState(false);

  const deleteTask = async () => {
    const taskURL = `${baseURL}/${props.task.id}`;

    await axios.delete(taskURL, config);

    props.setToggleFetch((curr) => !curr);
  };

  return (
    <div className="indiv-task">
      <input
        key={props.task.fields.id}
        type="checkbox"
        id="title"
        // value={checked}
        onClick={deleteTask}
      />
      <label htmlFor="title">{props.task.fields.title}</label>
    </div>
  );
}

export default Task;
