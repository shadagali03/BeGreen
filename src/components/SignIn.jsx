import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function SignIn() {
    const auth = firebase.auth();
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <button onClick={signInWithGoogle} style={{ padding: 0, borderWidth: 0, cursor: "pointer" }}>
            <img src="https://www.drupal.org/files/issues/2020-01-19/google_logo.png" alt="Sign in with Google" width="200" height="50" />
        </button>
    )
}