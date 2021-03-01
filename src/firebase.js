
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAvyzDkEFhR9KvX-wNSfKF8gYUagd7JAtY",
    authDomain: "slack-clone-a2ac2.firebaseapp.com",
    projectId: "slack-clone-a2ac2",
    storageBucket: "slack-clone-a2ac2.appspot.com",
    messagingSenderId: "315031316562",
    appId: "1:315031316562:web:c404ea3c3a59d8ee0fd78b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db };
