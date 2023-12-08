import React from 'react'
import "./Suggestions.css"
import { Avatar } from '@mui/material'
import Username from "./Username"
import { useState } from 'react'

function Suggestions() {
  const [usernames, setUsernames] = useState([{
    username: "hameed974",
    newTo: "New to Instagram"
  },
  {
    username: "kareem_98_83",
    newTo: "Followed by imran__khan"
  },
  {
    username: "mohammed_5456",
    newTo: "stark_34"
  },
  {
    username: "yousuf_345",
    newTo: "Followed by kl_rahul"
  }
  ])


  return (
    <div className="usernames">
      <div className="usernames__heading">Suggested for you</div>
      {usernames.map((suggestions) => (
        <Username  username={suggestions.username} newTo={suggestions.newTo}/>
      ))}

    </div>
  )
}

export default Suggestions