export const Task = (props) => {
  return (
    <div className="task" style={{backgroundColor : props.completed ? "green" : "white"}}>
      <p>{props.taskName}</p>
      <button onClick={() => props.deleteTask(props.id)}>x</button>
      <button onClick={() => props.completeTask(props.id)}>completed</button>

    </div>
  )
}
