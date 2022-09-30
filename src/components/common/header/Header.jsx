import React from 'react';
import SignIn from '../../SignIn';
import SignOut from '../../SignOut';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import Challenge from '../../challenge';

import './Header.css';

function Header() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth)

  return (
    <header>
      <div className="flex justify-center items-center h-full w-screen bg-gray-800 bg-opacity-90">
        <div className="text-center text-white p-6 md:px-12 w-full">
          <h1 className="text-5xl font-bold mt-0 mb-6">BeGreen</h1>
          <section className='float-right'>{user ? <SignOut /> : <SignIn />}</section>
          <Challenge/>
        </div>
      </div>
      {/* </div> */}
    </header >
  )
}

export default Header; 