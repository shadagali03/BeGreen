import React from 'react';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import ChatRoom from './components/ChatRoom';
import firebaseConfig from './firebase';
import { Header } from './components/common';
import Chaltext from './components/chaltext';

function App() {
  firebase.initializeApp(firebaseConfig);
  return (
    // <div className="overflow-hidden w-screen h-screen justify-center items-center bg-[url('https://mobimg.b-cdn.net/v3/fetch/c1/c16ef7461f4516485a2bcb65266bad09.jpeg')]">
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-no-repeat bg-cover w-screen h-screen" style={{
        // backgroundPosition: '50%',
        backgroundImage: "url('https://mobimg.b-cdn.net/v3/fetch/c1/c16ef7461f4516485a2bcb65266bad09.jpeg')",
        // backgroundImage: "url('https://i.pinimg.com/originals/0b/3d/0c/0b3d0c7d4cba82343643a5f4c48e2fba.gif')"
        // height: '350px'
      }}>
        <div className="flex flex-col">
          <Header />
          <Chaltext />
          <ChatRoom />
        </div>
      </div>
    </div>
  );
}

export default App;
