import "./task.css";
export function TaskCard(props) {
  console.log(props.ready);
  return (
    <div className="card">
      <h1>myFirst task</h1>
      {/* <span style={props.ready ? {backgroundColor:"green"} : {backgroundColor:"red"}}>{props.ready ? "Task completed" : "Task pending"}</span> */}
      <span className={props.ready?'bg-green':'bg-red'}>{props.ready ? "Task completed" : "Task pending"}</span>
    </div>
  );
}
