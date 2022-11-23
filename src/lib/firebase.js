import firebase from 'firebase/app';
import 'firebase/storage'; 

firebase.initializeApp({
  apiKey: "AIzaSyAWYO02Fv7BBd6Vgkc4lEs3uafqtwwTjIE",
  authDomain: "clone-e43aa.firebaseapp.com",
  projectId: "clone-e43aa",
  storageBucket: "clone-e43aa.appspot.com",
  messagingSenderId: "221951957708",
  appId: "1:221951957708:web:42dcc75262d990ce5b4069",
  measurementId: "G-BXTEMV5WVZ"
});
const storageRef = firebase.storage().ref();