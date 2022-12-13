import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import InputOptions from '../Feed/InputOptions/InputOptions';
import './Posts.css'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Posts = forwardRef (({name, description, message, photoUrl}, ref) => {
    return ( 
        <div ref={ref} className='post'>
            <div className='post_header'>
                <Avatar src={photoUrl} >{name[0]}</Avatar>
                <div className='post_info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post_body'>
                <p>{message}</p>
            </div>
            <div className='post_buttons'>
                <InputOptions Icon={ThumbUpOutlinedIcon} title='Like' color='gray' />
                <InputOptions Icon={ChatOutlinedIcon} title='Comment' color='gray' />
                <InputOptions Icon={ShareOutlinedIcon} title='Share' color='gray' />
                <InputOptions Icon={SendOutlinedIcon} title='Send' color='gray' />
            </div>
        </div>
     );
})
 
export default Posts;