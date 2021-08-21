// import database from "../../middleware/firebase/database";
import firestore from "../../middleware/firebase/firestore"


export default {
  getPlayersAc: async ({commit}) => {

    // const players = await database.read({entity:'players'});   //realtime database option

    const players = await firestore.read({entity: 'players'});
    commit('setPlayers', players)
  },


  deletePlayer: async ({state, commit}, idForSet) => {   //לא משנה סדר הכתיבה של הנתונים שהפונקציה הזאת מקבלת

    commit('setEditedPlayerId', idForSet)

    await firestore.remove({entity: 'players', playerId: state.editedPlayerId});

    const playerId = state.editedPlayerId;

    commit('resetEditedPlayerId')

    commit('deletePlayer', playerId)
  },


  updatePlayer: async ({state, commit}) => {
    const player = {}
    Object.assign(player, state.editedPlayer)
    player.id = state.editedPlayerId;

    //saves in DB
    // await database.update({entity: 'players', playerId: player.id, player}) // מקבלת משתנה player שהשמנו לו בשורה 24 את editedPlayer

    //saves in state
    commit('resetEditedPlayer')
    commit('resetEditedPlayerId')
    commit('editPlayer', player)
  },


  insertPlayer: async ({state, commit}) => {

    //realtime database option
    // player.id = (await database.create({entity: 'players', player})).key

    const player = {}

    Object.assign(player, state.editedPlayer)

    player.id = window.user.uid
    // saves in DB
    await firestore.create({entity: 'players', player})

    //reset edited player in state
    commit('resetEditedPlayer')
    // saves in state
    commit('insertPlayer', player)
  },


  setEditPlayerById: async ({state, commit},playerId) => {

    let player = {};

    if (state.players.length && state.players.find(() => playerId === state.editedPlayerId)) {
      player = state.players.find(() => playerId === state.editedPlayerId);
    } else {
      player = await firestore.getById ({entity: 'players', playerId})
    }

    // commit('resetEditedPlayerId'); אם אתקל בבאגים אולי יעזור?
    commit('setEditedPlayer', player);
  }


}
