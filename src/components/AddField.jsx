import React from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const AddField = ({ addTask }) => {
  const [newTask, setNewTask] = React.useState({
    text: "",
    checked: false,
  });

  const handleAddTask = () => {
    if (newTask.text.length > 0) {
      addTask(newTask);
      return setNewTask({ text: "", checked: false });
    }
    return null;
  };
  return (
    <div className="field">
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        checked={!!newTask.checked}
        onChange={(e) => {
          setNewTask({ ...newTask, checked: e.target.value });
        }}
      />
      <TextField
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
        value={newTask.text}
        onChange={(e) => {
          setNewTask({ ...newTask, text: e.target.value });
        }}
      />
      <Button onClick={handleAddTask}>
        <AddIcon />
      </Button>
    </div>
  );
};
