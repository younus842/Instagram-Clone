import React from 'react'
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';
import { loginUser, logoutUser } from '../features/userSlice';
import { signOut } from 'firebase/auth';





function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch  = useDispatch();

  const handleLogout = () => {
    dispatch(loginUser());
    signOut(auth);

  };


  return (
    <div className="sidenav">

      <img className="sidenav__logo" src="https://i0.wp.com/www.christinasandsengen.com/wp-content/uploads/2014/09/instagram-logo-black-on-white.png?resize=300%2C114&ssl=1" alt="Logo"></img>

      <div className="sidenav__buttons">
      <button className="sidenav__button">
          <HomeIcon className="icon" />
        <span>Home</span>
      </button>

      <button className="sidenav__button">
        <SearchIcon className="icon" />
        <span>Search</span>
      </button>

      <button className="sidenav__button">
        <ExploreIcon className="icon" />
        <span>Explore</span>
      </button>

      <button className="sidenav__button">
        <SlideshowIcon className="icon" />
        <span>Reels</span>
      </button>

      <button className="sidenav__button">
        <ChatIcon className="icon" />
        <span>Messages</span>
      </button>

      <button className="sidenav__button">
        <FavoriteBorderIcon className="icon" />
        <span>Notifications</span>
      </button>

      <button className="sidenav__button">
        <AddCircleOutlineIcon className="icon" />
        <span>Create</span>
      </button>

      <button className="sidenav__button">
        <Avatar>{user.username ? user.username.charAt(0).toUpperCase() : "A"}</Avatar>
        <span>{user.username}
        <button className='logout__button' onClick={handleLogout}>Log out</button>
        </span>
        
      </button>

      
        
        
   
        </div>

        <div className="more__button">
        <button className="sidenav__button">
        <MenuIcon className="icon" />
        <span>More</span>
        </button>
        </div>


    </div>
  )
}

export default Sidenav