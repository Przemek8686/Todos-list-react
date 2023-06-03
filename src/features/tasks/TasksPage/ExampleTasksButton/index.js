import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import Button from "../Button";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button disabled={loading} onClick={() =>dispatch(fetchExampleTasks())}>
            {
                loading
                    ? "Ladowanie..."
                    : "Pobierz przykladowe zadania"
            }
        </Button>
    );
};

export default ExampleTasksButton;