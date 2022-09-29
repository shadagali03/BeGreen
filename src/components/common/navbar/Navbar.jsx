import React from 'react';
import SignIn from '../../SignIn';
import SignOut from '../../SignOut';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import './Navbar.css'

function Navbar() {
    const auth = firebase.auth();
    const [user] = useAuthState(auth)

    return (
        <section className="navbar">
            <section>{user ? <SignOut /> : <SignIn />}</section>
        </section>
    )
}

export default Navbar; 