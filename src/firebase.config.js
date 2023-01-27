import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCXvgXaU2fyQ9bbon5qYwF5AUNTeqEZyVA",
  authDomain: "foodpad2.firebaseapp.com",
  databaseURL: "https://foodpad2-default-rtdb.firebaseio.com",
  projectId: "foodpad2",
  storageBucket: "foodpad2.appspot.com",
  messagingSenderId: "505706041149",
  appId: "1:505706041149:web:939fce15257af42d54ff54",
  measurementId: "G-03F5V93D56"
};

  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage }
