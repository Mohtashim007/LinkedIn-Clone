import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/User/userSlice';
import './SideBar.css'

const SideBar = () => {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>   
    )

    return ( 
        <div className='sideBar'>
            <div className='sidebar_top' >
                <img src='https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg' alt=''/>
                <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p className=''>Who Viewed You</p>
                    <p className='sidebar_statnumber'>2,345</p>
                </div>
                <div className='sidebar_stat'>
                    <p className=''>Views On Post</p>
                    <p className='sidebar_statnumber'>1,234</p>
                </div>
            </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('developer')}
                {recentItem('softwareengineer')}
                {recentItem('programmer')}
            </div>
        </div>
     );
}
 
export default SideBar;