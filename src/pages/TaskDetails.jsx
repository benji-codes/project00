import { useParams } from "react-router-dom";

function TaskDetails({ tasks }) {
    const { id } = useParams();
    const task = tasks.find((task) => task.id === parseInt(id));

    if (!task) {
        return <p>Task not found</p>;
    }

    return (
        <div>
            <h2>Task Details</h2>
            <p><strong>ID:</strong> {task.id}</p>
            <p><strong>Text:</strong> {task.text}</p>
            <p>
            <strong>Status:</strong> {task.completed ? "Completed" : "Incomplete"}
            </p>
        </div>
    );
}
export default TaskDetails;