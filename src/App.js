import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";




function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    [
      { id: 1, content: "transfer na React", done: false },
      { id: 2, content: "zrobić trening", done: true },
    ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };
  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section
        title="Dodaj Nowe Zadanie"
        body={<Form />}
      />
      <Section
        title="Lista Zadań"
        body={<Tasks
          tasks={tasks}
          hideDone={hideDone}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone} />}
        extraBodyContent={
          <Buttons tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  )
}
export default App;