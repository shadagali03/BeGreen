import React from 'react';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth'
import ChatRoom from './components/ChatRoom';
import firebaseConfig from './firebase';
import { Header } from './components/common';

function App() {
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <section>{user ? <ChatRoom /> : null}</section>
      </header>
    </div>
  );
}

export default App;
