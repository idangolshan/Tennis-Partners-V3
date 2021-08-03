import firebase from "firebase/app";
import firebaseInstance from './'
import auth from 'firebase/auth';
import firestore from "firebase/firestore";
import functions from "firebase/functions";
import storage from 'firebase/storage';

const fbInit = config => {
  return firebase.initializeApp(config);
}

const db = () => {
  return firebase.firestore();
}

export default {
  fbInit,
  db,
  firebase
}
