// Author: Susie Stanley
//Purpose: Defines component TodoDashList that renders a list of todo's in chronological order to the dashboard


import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { getAllTodosByUserId, completeTodo } from "../todos/TodoManager";
import { TodoDashCard } from "../todos/TodoDashCard";

export const TodoDashList = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    getAllTodosByUserId(sessionStorage.getItem("lifehacker_user")).then(todosFromAPI => {
      const completedTodos = [];
      todosFromAPI.forEach(todo => 
        {!todo.isCompleted ?
        completedTodos.push(todo)
        : console.log("completed")
        }
      )
      let firstFew = completedTodos.splice(0, 5)
      setTodos(firstFew)
    })
  }

  const handleCompleteTodo = id => {
    completeTodo(id)
        .then(() => getTodos()
        )
  }

  useEffect(() => {
    getTodos();
}, []); 

return (
  <>
      {todos[0] ?
        todos.map(todo => todo.isCompleted ? 
          console.log('true') 
        : <TodoDashCard 
            key={todo.id} todo={todo} handleCompleteTodo={handleCompleteTodo}/>)
        :  <div>No To-Dos Yet</div>
        }
  </>
)
}
