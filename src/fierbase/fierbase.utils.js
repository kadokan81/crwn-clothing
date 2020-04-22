import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAeXTreFtLhPZFARp5k1kNyv1tUAvx5FpM",
    authDomain: "react-shop-34a5a.firebaseapp.com",
    databaseURL: "https://react-shop-34a5a.firebaseio.com",
    projectId: "react-shop-34a5a",
    storageBucket: "react-shop-34a5a.appspot.com",
    messagingSenderId: "487284994598",
    appId: "1:487284994598:web:a5cb501b53c6f0c861ace7"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)
