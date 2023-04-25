import { useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const hideDone = () =>
    setTasks(tasks.map((task) => ({ ...task, done: true })));

  const toggleTaskDone = (id) =>
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : { ...task }
      )
    );

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const addNewTask = (readInput) =>
    setTasks((tasks) => [
      ...tasks,
      {
        content: readInput,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  const setAllDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  return {
    tasks,
    hideDone,
    toggleTaskDone,
    removeTask,
    addNewTask,
    setAllDone,
  };
};
export default useTasks;
