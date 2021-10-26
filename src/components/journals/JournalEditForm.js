//Author: Susie Stanley
//Purpose: Creates and displays form for user to edit an existing journal entry

import React, { useState, useEffect } from 'react'
// import { update, getEntryById } from './JournalManager'
// import { useParams, useHistory } from 'react-router-dom'
import { WelcomeBar } from '../../components/navbar/WelcomeBar'
import './Journal.css'
import '../LifeHacker.css'

export const JournalEditForm = () => {
  // const [entry, setEntry] = useState({})
  return (
    <div className="page">
      <WelcomeBar title="Edit Journal Entry" />
    </div>
  )
}
