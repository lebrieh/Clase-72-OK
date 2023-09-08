import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBD5MBZbwnxQ06qsSc2VqjQ0sQ1crxYxks",
  authDomain: "e-library-ecbd3.firebaseapp.com",
  projectId: "e-library-ecbd3",
  storageBucket: "e-library-ecbd3.appspot.com",
  messagingSenderId: "333420416237",
  appId: "1:333420416237:web:d44f156f14904b1d7090e4"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
