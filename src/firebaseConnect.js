import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDzAVcZCn9k-XVnL8rjT40ixG2dxdDJn7g",
    authDomain: "simple-store-online.firebaseapp.com",
    databaseURL: "https://simple-store-online.firebaseio.com",
    projectId: "simple-store-online",
    storageBucket: "simple-store-online.appspot.com",
    messagingSenderId: "839705007766",
    appId: "1:839705007766:web:e9f3df399ea52e076214b7",
    measurementId: "G-BT94ZZBT49"
  };
export const firebaseConnect = firebase.initializeApp(firebaseConfig);