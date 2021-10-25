// Author: Susie Stanley
//Purpose: Defines component TodoDashList that renders a list of todo's in chronological order to the dashboard


import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { getAllTodosByUserId, completeTodo } from "../todos/TodoManager";
import { TodoDashCard } from "../todos/TodoDashCard";

export const TodoDashList = ({ todo }) => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    return getAllTodosByUserId(sessionStorage.getItem("lifehacker_user")).then(todosFromAPI => {
        let firstFew = todosFromAPI.splice(0, 5);
        setTodos(firstFew)
    });
};

  // const handleCompleteTodo = id => {
  //   completeTodo(id)
  //       .then(() => getTodos());
  // }

  const handleCompleteTodo = id => {
    completeTodo(id)
        .then(() => getAllTodosByUserId().then(setTodos));
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
