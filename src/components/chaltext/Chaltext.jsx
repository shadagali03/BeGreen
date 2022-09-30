import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth'

import './Chaltext.css';

function Chaltext() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth)

  return (
    <header>
        <div class="outer">
        <div class="box">
          <div class="inner">
            <span>Make the Earth a Greener Place</span>
          </div>
          <div class="inner">
            <span>Make the Earth a Greener Place</span>
          </div>
        </div>
        </div>
    </header >
  )
}

export default Chaltext; 