import React, { useState } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase'

const firestore = firebase.firestore();

export default function Challenge() {
    const [challenge, setChallenge] = useState('')
    const todaysDate = new Date().toLocaleDateString();
    const todaysChallangeRef = db.collection("todaysChallange").where("date", "==", todaysDate).get()

    if (todaysChallangeRef) {
        const todaysChallangeSnap = (async () => await getDoc(todaysChallangeRef))();
        setChallenge(todaysChallangeSnap);
    } else {
        let size = 0;

        firestore.collection('challenges').get().then(snap => {
            size = snap.size // will return the collection size
        });

        const randomNum = Math.floor(Math.random() * size)
        const docRef = db.collection("challanges").where("id", "==", randomNum).get()
        const docSnap = (async () => await getDoc(docRef))();
        db.collection("todaysChallange").set({
            id: randomNum,
            date: todaysDate
        })

        setChallenge(docSnap)
    }

    return (
        <div>
            <h1>{challenge}</h1>
        </div>
    )
}