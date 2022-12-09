import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDeuIjPMy3g-wH67Zxc2ITJScslOGStYNM",
    authDomain: "fir-5bb0f.firebaseapp.com",
    projectId: "fir-5bb0f",
    storageBucket: "fir-5bb0f.appspot.com",
    messagingSenderId: "894510574470",
    appId: "1:894510574470:web:dc24de08b81a18c7485a07",
    measurementId: "G-B7HE65N5GK"
};

export default firebase.initializeApp(firebaseConfig)

