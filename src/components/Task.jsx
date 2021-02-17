function Task(props) {
  return (
    <div className="indiv-task">
      <h3>Today's Tasks: </h3>
      <h4>{props.task.fields.title}</h4>
    </div>
  );
}

export default Task;
