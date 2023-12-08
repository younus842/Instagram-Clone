import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import  TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';





function Post({user, postImage, likes, timestamp}) {
  return (
    <div className="post">
      <div className="post__header">

        <div className="post__header__author">
        <Avatar className="avatar">{user.charAt(0).toUpperCase()}</Avatar>
        {user} • <span>{timestamp}</span>

        </div>

        <MoreHorizIcon />
        
      </div>


        <div className="post__image">
          <img src={postImage} alt=""/>
        </div>
        <div className="post__footer">

          <div className="post__footer__icons">
            <div className="post__icons__main">
              
                <FavoriteBorderIcon className="postIcon" />
                
              
                <ChatBubbleOutlineIcon className="postIcon"/>
                
              
                <TelegramIcon className="postIcon" />
                
              
              
              
              


            </div>
            <div className="post__icons__save">
              
              <BookmarkBorderIcon className="postIcon"/>
              
              
              </div>

          </div>
          <span>Liked by {likes} people.</span>




        </div>
      

      
    </div>
  )
}

export default Post