import firebase from 'firebase';
import '@firebase/firestore';


const config = {
  apiKey: "AIzaSyDY4jT5AZUhe9EOMF2GnNA2it20Y4U2jJ8",
  authDomain: "hashtag-2e980.firebaseapp.com",
  databaseURL: "https://hashtag-2e980.firebaseio.com",
  projectId: "hashtag-2e980",
  storageBucket: "hashtag-2e980.appspot.com",
  messagingSenderId: "253680123531"
};

export let fire = firebase.initializeApp(config);
export let db = firebase.firestore();
