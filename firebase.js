import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDU_aWNa6fXXJFwVoTvs2_B-N0sKVwM12U",
  authDomain: "whatsapp-2-d2cfe.firebaseapp.com",
  projectId: "whatsapp-2-d2cfe",
  storageBucket: "whatsapp-2-d2cfe.appspot.com",
  messagingSenderId: "115524023887",
  appId: "1:115524023887:web:da0725d7c4913af3341c3a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
