import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyALLluTQ_vzKEqyJUrQE_I-AyWFYxaiap8",
  authDomain: "fidelityapp-5fa95.firebaseapp.com",
  databaseURL: "https://fidelityapp-5fa95.firebaseio.com",
  projectId: "fidelityapp-5fa95",
  storageBucket: "fidelityapp-5fa95.appspot.com",
  messagingSenderId: "601715198667",
  appId: "1:601715198667:web:86f0ebabd2ce145df0a94e",
  measurementId: "G-PFTSWTFWF0"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();