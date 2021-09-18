import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAaC8Go8n2ywvZuQ_zKG1cA4edNUW-fciw",
  authDomain: "photo-gallery-dfd01.firebaseapp.com",
  projectId: "photo-gallery-dfd01",
  storageBucket: "photo-gallery-dfd01.appspot.com",
  messagingSenderId: "768081065906",
  appId: "1:768081065906:web:7415e709fbb8fad29096ab",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
