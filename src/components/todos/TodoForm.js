// Author: Colby Ryan
// Purpose: Displays a form to add a new todo to your todo list.


import React, { useState } from "react";
import { useHistory } from "react-router";
import { addTodo } from "./TodoManager";



export const TodoForm = () => {
    const [todo, setTodo] = useState({
        title: "",
        byWhen: "",
        isCompleted: false,
        userId: parseInt(sessionStorage.getItem("lifehacker_user"))
    });

    const history = useHistory();

    const ResetForm = () => {
        setTodo({
            title: "",
            byWhen: "",
            isCompleted: false,
            userId: parseInt(sessionStorage.getItem("lifehacker_user"))
        });
        console.log("resetForm invoked")
      }

    const handleControlledInputChange = (event) => {
        const newTodo = { ...todo }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newTodo[event.target.id] = selectedVal
        setTodo(newTodo)
    }
    const handleClickSaveTodo = (event) => {
        event.preventDefault()
        const nameList = todo.title
        const dateList = todo.byWhen

        if (nameList === "" || dateList === "") {
            window.alert("Please fill out all required info")
        } else {
            addTodo(todo)
                .then(() => history.push("/todos"))
        }
    }

    return (
        <>
        <div className="form__flex">

            <form>

                <div className="form__title">Add New Todo
                </div>

                <fieldset>

                    <div className="form__group">

                        <label htmlFor="title">Enter To-Do: </label>

                        <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form__group--edit" placeholder="To-Do" value={todo.title} />

                    </div>

                    <div className="form__group">

                        <label htmlFor="byWhen">Select 'By When': </label>

                        <input type="date" id="byWhen" onChange={handleControlledInputChange} required className="form__group--edit" value={todo.byWhen} />

                    </div>

                </fieldset>

                <div className="form__btns">

                    <button className="form__btn" onClick={handleClickSaveTodo}>Submit</button>

                    <button className="form__btn" onClick={ResetForm}>Reset Form</button>

                    <button type="button" className="form__btn" onClick={() => { history.push("/todos") }}>Cancel</button>

                </div>

            </form>
                
        </div>
        </>
    )
}