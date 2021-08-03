import firebaseInstance from 'src/middleware/firebase';
import firebase from '../../firebase';


function getRef(options) {
  return firebase.db().collection(`users/${window.user.uid}/data/${options.entity}`)
}

function read(options) {
  return firebase.db().collection("players").get().then(docs => {
    let arr = []
    docs.forEach(doc => {
      const data = doc.data();
      const id = doc.id;
      data.id = id;
      arr.push(data)
    })
    return arr;
  })
}
// לבדוק למה לא השתמשתי בID ושם הטבלה פליירס שנשלחו בOPTIONS מהSTATE
function create(options) {
  return firebase.db().collection(options.entity).doc(`${window.user.uid}`).set(options.player)
}
// לבדוק למה לא השתמשתי בID ושם הטבלה פליירס שנשלחו בOPTIONS מהSTATE
function remove(options) {
  return firebase.db().collection("users").doc(`${window.user.uid}`).delete()
    .then(result => {
      return result
    })
}

function update(options) {
  return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/data/${options.entity}/${options.playerId}`).set(options.player);
}

function getPlayerById(options) {

  let selectedPlayer = []
  return read(options)
    .then(result => {
      debugger
      for (let singleInput of result) {
        if (options.playerId === singleInput.id) {
          selectedPlayer = singleInput
        }
      }
      return selectedPlayer
    })
}

function getById(options) {
  return firebase.db().collection(options.entity).doc(options.playerId).get()
    .then(doc=>{
      const data = doc.data();
      return data;
    })
}
  // firebaseInstance.firebase.database()
  //   .ref(`users/${window.user.uid}/data/${options.entity}/${options.playerId}`).once('value')


export default {
  read,
  create,
  update,
  remove,
  getPlayerById,
  getRef,
  getById
}

