//Author: Susie Stanley
//Purpose: Outputs A List Of To-Do List Items to the DOM

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TodoCard } from "./TodoCard";
import { completeTodo, deleteTodo, getTodosByUserId } from "./TodoManager";
import { WelcomeBar } from "../../components/navbar/WelcomeBar";

export const TodoBoard = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    getTodosByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (todosFromAPI) => {
        setTodos(todosFromAPI);
      }
    );
  };

  const handleDelete = (id) => {
    deleteTodo(id).then(() => {
      getTodos();
    });
  };

  const handleCompleteTodo = (id) => {
    completeTodo(id).then(() =>
      getTodosByUserId(sessionStorage.getItem("lifehacker_user")).then(setTodos)
    );
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="page">
      <WelcomeBar title="To Do List" />
      <div className="section-flex">
        <div className="section-flex__content">
          <Link to={`todos/create`}>
            <button className="add-todo">+ Add To-Do</button>
          </Link>
        </div>

        <div className="board-container__todo">
          <div className="todo-card-list">
            {/* ternary statement to show only uncompleted todos */}
            {todos.map((todo) =>
              todo.isCompleted ? (
                console.log("true")
              ) : (
                <TodoCard
                  key={todo.id}
                  todo={todo}
                  handleDelete={handleDelete}
                  handleCompleteTodo={handleCompleteTodo}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
