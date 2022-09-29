import React, { useState, useRef } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import 'firebase/compat/auth';
import ChatMessage from './ChatMessage';

export default function ChatRoom() {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const messagesRef = firestore.collection('posts');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('')
    const dummy = useRef()
    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <main>
                {messages && messages.map((msg, index) => <ChatMessage key={index} message={msg} />)}
                <div ref={dummy}></div>
            </main>
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}