//Author: Susie Stanley
//Purpose: Output List of Journal Entries to the DOM

import React from 'react'
import { Link } from 'react-router-dom'
import { WelcomeBar } from '../../components/navbar/WelcomeBar'

export const JournalBoard = () => {
  return (
    <div className="page">
      <WelcomeBar title="Journal" />
      <div className="section-flex__content">
        <Link to={`/journals/create`}>
          <button className="add-journal">+ Add Entry</button>
        </Link>
      </div>
    </div>
  )
}
