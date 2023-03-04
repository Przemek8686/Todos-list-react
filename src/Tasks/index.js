import "./style.css";
const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="list__tasks">
        {tasks.map(task => (
            <li
            key={task.id}
                className={`list__task ${task.done && hideDoneTasks ? " list__task--hidden" : ""
                    }`}
            >
                <button className="tasks__button tasks__button--toggleDone">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`list__text ${task.done ? "list__text--done" : ""}`}>
                    {task.content}
                </span>
                <button className=" tasks__button  tasks__button--remove">🗑</button>
            </li>
        ))}
    </ul>
);
export default Tasks;