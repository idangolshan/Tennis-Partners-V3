import firebaseInstance from '../../../firebase'


export default {
  userLogout,
  userLogin,
  register,
  loginWithGoogle,
  plainSignIn
}


function userLogout(){
  firebaseInstance.firebase.auth().signOut().then(() => {
    localStorage.setItem('user', JSON.stringify(false))
    localStorage.setItem('uid', JSON.stringify(false))
    console.log('sign out successful')
  }).catch((error) => {
    console.log('An error happened while signing out', error)
  });}

function userLogin(options){
    return firebaseInstance.firebase.auth().signInWithEmailAndPassword(options.email, options.password)
}

function register(email, password){
  return firebaseInstance.firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user
      window.user = user; // הוספה שלי
        debugger
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('uid', user.uid)
    })
    .catch((error) => {
      console.log('error-code',error.code);
      console.log('error-Message',error.message);
        });
}

function loginWithGoogle() {
  const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
  return firebaseInstance.firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      window.user = user; // הוספה שלי

      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('uid', JSON.stringify(user.uid))

    }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  });
}

  function plainSignIn(email, password) {
    return firebaseInstance.firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user; // change name
        window.user = user; // הוספה שלי
        localStorage.user = JSON.stringify(userCredential);
        localStorage.uid = JSON.stringify(userCredential.user.uid);
        debugger
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  }
