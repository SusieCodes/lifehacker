// Author: Susie Stanley
// Purpose: Displays list of To-Do items by user


import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { getAllTodos, completeTodo } from "../todos/TodoManager";
import { TodoDashCard } from "../todos/TodoDashCard";
// import {FaEdit, FaTrash } from "react-icons/fa"


export const TodoDashList = ({ todo }) => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    return getAllTodos().then(todosFromAPI => {
        let firstFive = todosFromAPI.splice(0, 4);
        setTodos(firstFive)
    });
};

  const handleCompleteTodo = id => {
    completeTodo(id)
        .then(() => getAllTodos().then(setTodos));
  }

  useEffect(() => {
    getTodos();
}, []); 

return (
  <>
        {/* ternary statement to show only uncompleted todos */}
        {todos.map(todo => todo.isCompleted ? 
          console.log('true') 
        : <TodoDashCard 
            key={todo.id} todo={todo} handleCompleteTodo={handleCompleteTodo}/>)}
  </>
)
}
