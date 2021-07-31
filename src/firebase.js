import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBDePr9_jopeqsIj7nrqMFFrwf16oWELtM",
    authDomain: "netflix-80d3e.firebaseapp.com",
    projectId: "netflix-80d3e",
    storageBucket: "netflix-80d3e.appspot.com",
    messagingSenderId: "395088075624",
    appId: "1:395088075624:web:ed79b09683315d90ab94dd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();

  export {auth};
  export default db;