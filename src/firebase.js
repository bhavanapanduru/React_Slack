import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyDOSF7TTlTi_RhpZ2ebpF_A_IHwiwVZCf8",
    authDomain: "react-slack-c12e9.firebaseapp.com",
    databaseURL: "https://react-slack-c12e9.firebaseio.com",
    projectId: "react-slack-c12e9",
    storageBucket: "react-slack-c12e9.appspot.com",
    messagingSenderId: "184294404875"
  };
  firebase.initializeApp(config);

  export default firebase;