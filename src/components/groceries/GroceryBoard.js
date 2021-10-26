import React from 'react'
import { Link } from 'react-router-dom'
import { WelcomeBar } from '../navbar/WelcomeBar'

export const GroceryBoard = () => {
  return (
    <div className="page">
      <WelcomeBar title="Groceries" />

      <div className="section-flex__content">
        <Link to={`/groceries/create`}>
          <button className="add-groceries">+ Add Groceries</button>
        </Link>
      </div>
    </div>
  )
}
