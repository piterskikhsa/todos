import React from "react";

import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";
import { getNewId } from "./utils";

const reducer = (state, action) => {
  if (action.type === "ADD_TASK") {
    return [...state, action.payload];
  }
  if (action.type === "CHANGE_CHECKED_TASK") {
    const index = state.findIndex((obj) => obj.id === action.payload.id);
    let newState = [...state];

    newState[index] = { ...newState[index], ...action.payload };
    return newState;
  }
  return state;
};

function App() {
  const [tasks, dispatch] = React.useReducer(reducer, [
    { id: 1, text: "Задача № 1", checked: false },
    { id: 2, text: "Задача № 2", checked: true },
  ]);

  const handleAddTask = (data) => {
    const newId = getNewId(tasks);
    dispatch({ type: "ADD_TASK", payload: { ...data, id: newId } });
  };

  const handleChnageChecked = (data) => {
    dispatch({ type: "CHANGE_CHECKED_TASK", payload: { ...data } });
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField addTask={handleAddTask} />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {tasks.map((task) => (
            <Item
              id={task.id}
              key={task.id}
              text={task.text}
              checked={task.checked}
              changeChecked={handleChnageChecked}
            />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить всё</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
