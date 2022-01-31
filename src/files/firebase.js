import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCdfSfKcQ0aDU80BuS8sB9MtlvXdcTVA0U",
    authDomain: "leaveformproject.firebaseapp.com",
    projectId: "leaveformproject",
    storageBucket: "leaveformproject.appspot.com",
    messagingSenderId: "732169503929",
    appId: "1:732169503929:web:64e39719ba8a8779b08768",
    measurementId: "G-T5JE7576Z9"
});
var database = firebaseApp.database();
var db = firebaseApp.firestore();
var auth = firebaseApp.auth();
var storage = firebaseApp.storage();
export {database,db,auth,storage};