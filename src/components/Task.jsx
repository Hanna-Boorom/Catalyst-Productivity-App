function Task(props) {
  const { todo } = props.task.fields;

  return (
    <div className="indiv-task">
      <h4>{props.task.fields.title}</h4>
    </div>
  );
}

export default Task;
