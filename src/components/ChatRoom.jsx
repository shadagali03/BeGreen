import React, { useState, useRef, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "firebase/compat/auth";
import ChatMessage from "./ChatMessage";
import { useAuthState } from "react-firebase-hooks/auth";
import Chaltext from "./chaltext";

export default function ChatRoom() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const [user] = useAuthState(auth);
  const messagesRef = firestore.collection("posts");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");
  const dummy = useRef(null);
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    // dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    dummy?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [formValue]);

  return (
    <div className="flex justify-center items-center bg-[url(https://mobimg.b-cdn.net/v3/fetch/c1/c16ef7461f4516485a2bcb65266bad09.jpeg)] h-128">
      <div className="w-3/4 bg-emerald-200 bg-opacity-70 rounded overflow-y-scroll h-80">
        <main className="h-full">
          <table className="table-auto m-5 ">
            <tbody className="">
              {messages &&
                messages.map((msg) => (
                  <ChatMessage key={msg.id} message={msg} />
                ))}
            </tbody>
          </table>
          <div className="p-200" ref={dummy}></div>
        </main>
        {user ? (
        <form onSubmit={sendMessage}>
          <input
            className=""
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            type="submit"
          >
            Post
          </button>
        </form>
      ) : (
        <p>Please Sign in with google to chat</p>
      )}
      </div>
    </div>
  );
}
