import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function SignOut() {
    const auth = firebase.auth();
    return <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={() => auth.signOut()}>Sign out</button>
}