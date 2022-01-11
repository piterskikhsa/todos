import React from "react";

import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";

import { AddField } from "./components/AddField";
import { Item } from "./components/Item";
import { getNewId } from "./utils";
import { reducer } from "./reducer";
import { TYPE } from "./constans";

function App() {
  const [tasks, dispatch] = React.useReducer(reducer, [
    { id: 1, text: "Задача № 1", checked: false },
    { id: 2, text: "Задача № 2", checked: true },
  ]);

  const handleAddTask = (data) => {
    const newId = getNewId(tasks);
    dispatch({ type: TYPE.ADD_TASK, payload: { ...data, id: newId } });
  };

  const handleChangeChecked = (data) => {
    dispatch({ type: TYPE.CHANGE_CHECKED_TASK, payload: { ...data } });
  };

  const handleRemoveTask = (data) => {
    dispatch({ type: TYPE.DELETE_TASK, payload: { ...data } });
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
              changeChecked={handleChangeChecked}
              removeItem={handleRemoveTask}
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
