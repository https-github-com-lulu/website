import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export const firebaseConfig = {
    apiKey: "AIzaSyACCbcYylqvPcbN2JBhvV6Bei6VCemyoos",
    authDomain: "somativa-lulu.firebaseapp.com",
    projectId: "somativa-lulu",
    storageBucket: "somativa-lulu.appspot.com",
    messagingSenderId: "957090647691",
    appId: "1:957090647691:web:aedaea57be5ead29204e8e"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
