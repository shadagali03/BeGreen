import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function SignOut() {
    const auth = firebase.auth();
    return <button onClick={() => auth.signOut()}>Sign out</button>
}