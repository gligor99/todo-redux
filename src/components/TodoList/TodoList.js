import React from "react";
import { useSelector } from "react-redux";
import { selectTodoList } from "../../features/todo/todoSlice";
import TodoItem from "../TodoItem/TodoItem";
import "./todoList.css";

const TodoList = () => {
  const todoList = useSelector(selectTodoList)

  return (
    <div className="todoList">
      <div className="todoList-container">
        <div className="todoList-item">
          {todoList ? todoList.map((item, index) => {
            return <TodoItem key={index} name={item.item} done={item.done} id={item.id} />;
          }) : <p>Kurcina</p>}
          
        </div>
      </div>
    </div>
  );
};

export default TodoList;
