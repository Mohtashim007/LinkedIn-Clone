import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../config/config';
import { login } from '../../features/User/userSlice';
import './Login.css'

const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch();

    const register = () =>{
        if(!name)
        return alert("Please Enter a Full Name");

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) =>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid, 
                    displayName: name,
                    photoURL: profilePic,
                }));
            });
        }).catch(error => alert(error));
    };

    const loginToApp = (e) =>{
       e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((userAuth) =>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid, 
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            }));
        }).catch((error) => alert(error));
    } 

    return ( 
        <div className='login'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png' alt=''/>
            <form>
                <input placeholder='Full Name (required if register)' type='text'value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='Profile Picture URL' type='text'value={profilePic} onChange={(e) => setProfilePic(e.target.value)}/>
                <input placeholder='Email' type='email' value={email}  onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder='Password' type='password' value={password}  onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?{" "}
                <span className='login_register' onClick={register}>Register Now</span>
            </p>
        </div>
     );
}
 
export default Login;