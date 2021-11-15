//Author: Susie Stanley
//Purpose: Outputs A List Of To-Do List Items to the DOM

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TodoCard } from "./TodoCard";
import { completeTodo, deleteTodo, getTodosByUserId } from "./TodoManager";
import { WelcomeBar2 } from "../../components/navbar/WelcomeBar2";

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
      <WelcomeBar2 title="To Do List" />
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
                console.log("")
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
