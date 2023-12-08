import React from 'react'
import "./Suggestions.css"
import { Avatar } from '@mui/material'

function Username({username, newTo}) {
  return (
    <div>
      <div className="username">
        <div className="username__left">
          <span className="username__avatar">
            <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
          </span>
          <div className="username__name">
            <span className="top__name">
              {username}</span><br/>
            <span className="new__to">
              {newTo}
            </span>
          </div>
        </div>
        <div className="username__right">
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Username