// Author: Susie Stanley
// Purpose: Displays form to edit existing To-Do

import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { getTodoById, update } from "./TodoManager";

export const TodoEditForm = () => {
    const [todo, setTodo] = useState({ title: "", byWhen: "" })
    const [isLoading, setIsLoading] = useState(false);

    const { todoId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...todo };
        stateToChange[evt.target.id] = evt.target.value;
        setTodo(stateToChange);
    };
    const updateExistingTodo = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedTodo = {
            id: todoId,
            title: todo.title,
            byWhen: todo.byWhen,
            isCompleted: false,
            userId: todo.userId
        };

        update(editedTodo)
            .then(() => history.push("/todos")
            )
    }
    useEffect(() => {
        getTodoById(todoId)
            .then(todo => {
                setTodo(todo)
                setIsLoading(false);
            });
    }, []);

    return (
        <>
        <div className="form__flex">

            <form>

                <div className="form__title">Edit To-Do
                </div>

                <fieldset>

                    <div className="form__group">

                        <label htmlFor="title">To-Do Title</label>
                        <input
                            type="text"
                            required
                            className="form__group--edit"
                            onChange={handleFieldChange}
                            id="title"
                            value={todo.title}
                        />

                        <label htmlFor="byWhen">By When</label>
                        <input
                            type="date"
                            required
                            className="form__group--edit"
                            onChange={handleFieldChange}
                            id="byWhen"
                            value={todo.byWhen}
                        />

                    </div>

                </fieldset>


                <div className="form__btns">

                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingTodo}
                            className="form__btn">Submit
                        </button>

                        <button
                            type="button"
                            onClick={() => history.push(`/todos`)}
                            className="form__btn">Cancel
                        </button>
                        
                </div>

            </form>

        </div>
        </>
    )
}