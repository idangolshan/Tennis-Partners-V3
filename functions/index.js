const functions = require("firebase-functions");
const admin = require('firebase-admin');
const auth = require('./auth/index')
admin.initializeApp();
// const db = admin.firestore();
const firebase_tools = require('firebase-tools');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.setUserDetailsOnCreateUser = functions.auth.user().onCreate(userRecord=>{
  const userDetails = {
    uid: userRecord.uid,
    email: userRecord.email
  }
  admin.firestore().collection('users').doc(userRecord.uid).set(userDetails)
    .then(()=>{
      console.log('success')
    })
    .catch((e)=>{
      console.log(e.message,'something wrong')
    })
})

