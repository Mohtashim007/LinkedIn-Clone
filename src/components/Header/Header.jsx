import React from 'react';
import './Header.css'
import HeaderOptions from './HeaderOptions/HeaderOptions';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from '../../config/config';
import { logout } from '../../features/User/userSlice';

const Header = () => {

   const dispatch = useDispatch();

   const logoutOfApp = () => {
      dispatch(logout());
      auth.signOut();
   };

    return ( 
        <div className="header">
             <div className='header_left'>
                <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt=''/>

                <div className='header_search'>
                    <SearchIcon/>
                    <input placeholder='Search' type='text'/>
                </div>
             </div>
             

             <div className='header_right'>
                <HeaderOptions Icon={HomeIcon} title="Home"/>
                <HeaderOptions Icon={SupervisorAccountIcon} title="Network"/>
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOptions Icon={ChatIcon} title="Messaging"/>
                <HeaderOptions Icon={NotificationsIcon} title="Notification"/>
                <HeaderOptions avatar={true} title="Me" onClick={logoutOfApp} />
             </div>

        </div>
     );
}
 
export default Header;