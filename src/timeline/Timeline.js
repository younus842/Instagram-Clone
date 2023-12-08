import React from 'react';
import "./Timeline.css";
import Suggestions from './Suggestions';
import Post from './Posts/Post';
import { useState } from 'react';

function Timeline() {
  const [posts, setPosts] = useState([{
    user: "redian__",
    postImage: "https://images.unsplash.com/photo-1597283712405-819a6021326c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhkJTIwcGhvdG9zfGVufDB8fDB8fHww",
    likes: 12,
    timestamp: "2d"
  },
  {
    user: "younus__235",
    postImage: "https://images.unsplash.com/photo-1615871154954-3a50b273dbf6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGQlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D",
    likes: 250,
    timestamp: "1h"
  },
  {
    user: "robert90348__",
    postImage: "https://images.unsplash.com/photo-1571348264903-c3af9582e4ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhkJTIwcGhvdG9zfGVufDB8fDB8fHww",
    likes: 361,
    timestamp: "6h"
  },
  {
    user: "khan__234",
    postImage: "https://images.unsplash.com/photo-1611316185995-9624c94487d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhkJTIwcGhvdG9zfGVufDB8fDB8fHww",
    likes: 768,
    timestamp: "13h"
  }
]);


  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post user ={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp} />
          ))}
        </div>
      </div>
      <div className="timeline__right">
          <Suggestions /> 
      </div>
      </div>
  )
}

export default Timeline