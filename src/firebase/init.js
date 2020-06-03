import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAFj_-OWAvWL9XxUskcsVYdIGFmYA0yE0I",
  authDomain: "fidelity-income-fcd95.firebaseapp.com",
  databaseURL: "https://fidelity-income-fcd95.firebaseio.com",
  projectId: "fidelity-income-fcd95",
  storageBucket: "fidelity-income-fcd95.appspot.com",
  messagingSenderId: "214807404559",
  appId: "1:214807404559:web:070b2fd636c1f747b4c37a",
  measurementId: "G-4VN6LS9KHC"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();