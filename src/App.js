import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Feed from './components/Feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/User/userSlice';
import Login from './components/Login/Login';
import { auth } from './config/config';
import Widgets from './components/Widges/Widges';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login(
          {
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          }
        ))
      }
      else{
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">
      <Header/>
      {
        user ? ( 
          <div className='app_body'>
            <SideBar/>
            <Feed />
            <Widgets/>
          </div>
      ) : (<Login/>)
      }
    </div>
  );
}

export default App;
