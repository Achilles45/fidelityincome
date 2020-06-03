import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBQnZO5-pVzE53TDEmI2YzeyUxNTqVLhUI",
  authDomain: "fidelity-app-45696.firebaseapp.com",
  databaseURL: "https://fidelity-app-45696.firebaseio.com",
  projectId: "fidelity-app-45696",
  storageBucket: "fidelity-app-45696.appspot.com",
  messagingSenderId: "591798518235",
  appId: "1:591798518235:web:68bbad6643ebc7acb1a7fe",
  measurementId: "G-D15QJE4KMR"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();