function Task(props) {
  return (
    <div className="indiv-task">
      <input type="checkbox" id="title" />
      <label htmlFor="title">{props.task.fields.title}</label>
    </div>
  );
}

export default Task;
