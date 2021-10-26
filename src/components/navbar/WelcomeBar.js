import React from 'react'
import { formatDate } from '../helper'
import '../LifeHacker.css'

export const WelcomeBar = (props) => {
  const { title } = props
  return (
    <div className="page-title__flex">
      <div className="page-title__left">
        Welcome{' '}
        <span className="welcome-name">
          {sessionStorage.getItem('lifehacker_username')}
        </span>
      </div>

      <div className="page-title__headline">{title}</div>

      <div className="page-title__right">
        Today: &nbsp;&nbsp;
        <span className="todays-date">{formatDate(Date.now())}</span>
      </div>
    </div>
  )
}
