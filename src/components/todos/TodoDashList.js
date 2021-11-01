// Author: Susie Stanley
//Purpose: Defines component TodoDashList that renders a list of todo's in chronological order to the dashboard

import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import {
  getTodosByUserId,
  completeTodo,
  deleteTodo,
} from "../todos/TodoManager";
import { TodoDashCard } from "../todos/TodoDashCard";

export const TodoDashList = () => {
  const [todos, setTodos] = useState([]);

  //gets all the user's todos and sets it to state
  const getTodos = () => {
    getTodosByUserId(sessionStorage.getItem("lifehacker_user")).then(
      (todosFromAPI) => {
        const completedTodos = [];
        todosFromAPI.forEach((todo) => {
          !todo.isCompleted ? completedTodos.push(todo) : console.log("");
        });
        let firstFew = completedTodos.splice(0, 5);
        setTodos(firstFew);
      }
    );
  };

  const handleCompleteTodo = (id) => {
    completeTodo(id).then(() => getTodos());
  };

  const handleDelete = (id) => {
    deleteTodo(id).then(() => {
      getTodos();
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      {todos[0] ? (
        todos.map((todo) =>
          todo.isCompleted ? (
            console.log("true")
          ) : (
            <TodoDashCard
              key={todo.id}
              todo={todo}
              handleCompleteTodo={handleCompleteTodo}
              handleDelete={handleDelete}
            />
          )
        )
      ) : (
        <div>No To-Dos Yet</div>
      )}
    </>
  );
};
