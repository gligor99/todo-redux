import React from "react";
import "./todoItem.css";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "../../features/todo/todoSlice";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      {/* Name */}
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
