import Task from "./Task.jsx";


export default function Column({ title, tasks }) {
    return (
        <div className="column">
        <h2>{title}</h2>

        {tasks.map(function (task) {
            return <Task key={task.id} task={task} />;
        })}
        </div>
    );
}
