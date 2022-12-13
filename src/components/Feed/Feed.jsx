import React, { useEffect, useState } from 'react';
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions/InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Posts from '../Posts/Posts';
import { db } from '../../config/config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/User/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {

    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState([])

    useEffect(() => {
      db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) => (
        setPosts(snapshot.docs.map((doc) => (
            {
                id: doc.id,
                data: doc.data(),
            }))
        )
      ));
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoURL || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };

    return ( 
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <CreateIcon/>
                    <form>
                        <input type='text' value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed_inputOptions'>
                    <InputOptions title='Photo' Icon={ImageIcon} color="#7065F9" />
                    <InputOptions title='Video' Icon={SubscriptionsIcon} color='#E7A33E' />
                    <InputOptions title='Event' Icon={EventNoteIcon} color='#C0CBCD' />
                    <InputOptions title='Write article' Icon={CalendarViewDayIcon} color='#7fC15E' />
                </div>
            </div>
            <FlipMove>
                {posts.map(({id, data:{name, description, message, photoUrl}}) => (
                    <Posts 
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
     );
}
 
export default Feed;