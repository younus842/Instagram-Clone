import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Homepage from './Homepage';
import Authentication from "./authentication/Authentication"
import { useEffect } from 'react';
import { auth } from './firebase';
import { loginUser,setLoading } from './features/userSlice';



function App() {

 

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(loginUser({
          uid: authUser.uid,
          username: authUser.displayName,
          email: authUser.email,
        })
        );
        dispatch(setLoading(false));
      }else{
        console.log("User is not logged in");
      }
    });

  }, []);



  const user = useSelector(state => state.data.user.user);

  const isLoading = useSelector(state => state.data.user.isLoading);



  
  return (
    <div className="App">

    {isLoading ? (<div className="loader-container">
      <div className="loader"></div>
    </div>) : (<>{user ? <Homepage /> : (<Authentication />) }</>)}

        
      
      
    </div>
  );
}

export default App;
