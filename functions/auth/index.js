// const functions = require('firebase-functions')
// const admin = require('firebase-admin');
//
//
// exports.setUserDetailsOnCreateUser = functions.auth.user().onCreate(userRecord=>{
//   const userDetails = {
//     name: userRecord.displayName,
//     uid: userRecord.uid,
//     email: userRecord.email
//   }
//   admin.firestore().collection('users').doc(userRecord.uid).set(userDetails)
//     .then(()=>{
//     console.log('success')
//   })
//     .catch((e)=>{
//       console.log(e.message,'something wrong')
//     })
// })
//
