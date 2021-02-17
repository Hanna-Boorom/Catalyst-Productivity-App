import { useState } from "react";

function Task(props) {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  return (
    <div className="indiv-task">
      <input
        key={props.task.fields.id}
        type="checkbox"
        id="title"
        value={checked}
        onClick={handleClick}
      />
      <label htmlFor="title">{props.task.fields.title}</label>
    </div>
  );
}

export default Task;
