import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAGm9MPBvfvve2G5NkjTMyo03hjqL02QB0",
    authDomain: "majorproject2-752ea.firebaseapp.com",
    databaseURL: "https://majorproject2-752ea-default-rtdb.firebaseio.com",
    projectId: "majorproject2-752ea",
    storageBucket: "majorproject2-752ea.appspot.com",
    messagingSenderId: "825747469245",
    appId: "1:825747469245:web:2742e347033f7e6271d8d4",
    measurementId: "G-JMGCLC3NC6"
  };
  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage }