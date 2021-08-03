import firebaseInstance from '../middleware/firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBSVuhPjzfpqRSl3An8igqMdMNDD85Rj1U",
  authDomain: "partner-for-tennis-v2-d2a76.firebaseapp.com",
  databaseURL: "https://partner-for-tennis-v2-d2a76-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "partner-for-tennis-v2-d2a76",
  storageBucket: "partner-for-tennis-v2-d2a76.appspot.com",
  messagingSenderId: "534829731562",
  appId: "1:534829731562:web:03934247d63014ee899193",
  measurementId: "G-08YNLV5ZTS"
};

firebaseInstance.fbInit(firebaseConfig);

firebaseInstance.firebase.auth().onAuthStateChanged( user => {
  window.user = user
  if (!user) {
    localStorage.setItem('uid',JSON.stringify(false))
    localStorage.setItem('user',JSON.stringify(false))
  } else {
    localStorage.setItem('uid', user.uid);
    localStorage.setItem('user', JSON.stringify(user));
  }
})
