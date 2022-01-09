import React from "react";
import { IconButton, Checkbox, ListItem, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Item = ({ id, text, checked, changeChecked, removeItem }) => {
  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          checked={!!checked}
          onChange={(e) => {
            changeChecked({ id: id, checked: e.target.checked });
          }}
        />
        <Typography className="item-text">{text}</Typography>
        <div className="item-buttons d-flex">
          <IconButton>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton
            onClick={() => {
              let isBoss = window.confirm("Точно удалить задачу?");
              if (isBoss) removeItem({ id });
            }}
          >
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
};
