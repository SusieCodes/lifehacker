// Author: Susie Stanley
// Purpose: Displays form to edit existing To-Do

import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router'
import { getTodoById, update } from './TodoManager'
import { WelcomeBar } from '../navbar/WelcomeBar'
import './Todo.css'
import '../LifeHacker.css'

export const TodoEditForm = () => {
  const [todo, setTodo] = useState({
    title: '',
    byWhen: '',
    isCompleted: false,
    userId: parseInt(sessionStorage.getItem('lifehacker_user')),
  })

  const [isLoading, setIsLoading] = useState(false)

  const { todoId } = useParams()
  const history = useHistory()

  const handleFieldChange = (evt) => {
    const stateToChange = { ...todo }
    stateToChange[evt.target.id] = evt.target.value
    setTodo(stateToChange)
  }
  const updateExistingTodo = (evt) => {
    evt.preventDefault()
    setIsLoading(true)

    const editedTodo = {
      id: todoId,
      title: todo.title,
      byWhen: todo.byWhen,
      isCompleted: todo.isCompleted,
      userId: todo.userId,
    }

    update(editedTodo).then(() => history.push('/todos'))
  }
  useEffect(() => {
    getTodoById(todoId).then((todo) => {
      setTodo(todo)
      setIsLoading(false)
    })
  }, [todoId])

  return (
    <>
      <div className="page">
        <WelcomeBar title="Add New Note" />

        <div className="form-flex">
          <fieldset className="form">
            <div className="form__group">
              <label htmlFor="title">To-Do</label>
              <input
                type="text"
                required
                className="form__group--edit"
                onChange={handleFieldChange}
                id="title"
                value={todo.title}
              />
            </div>
            <div className="form__group">
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

          <div className="form-btns">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingTodo}
              className="form-btn"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={() => history.push(`/todos`)}
              className="form-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
