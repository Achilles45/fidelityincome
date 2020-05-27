import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBdlp3iY1HkD1yfVsKHtcEvK_jQ037k0Ow",
  authDomain: "fidelity-income.firebaseapp.com",
  databaseURL: "https://fidelity-income.firebaseio.com",
  projectId: "fidelity-income",
  storageBucket: "fidelity-income.appspot.com",
  messagingSenderId: "839125393619",
  appId: "1:839125393619:web:d0ed0bf847691bc0f23426",
  measurementId: "G-86RZQHF6PD"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();