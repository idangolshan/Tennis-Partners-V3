export default {

    setPlayers: ((state, players) => state.players = players),

    setEditedPlayerId: ((state, id) => state.editedPlayerId = id),

    setEditedPlayer: ((state, player) => state.editedPlayer = player),

    resetEditedPlayerId: ((state) => state.editedPlayerId = ''),

    resetEditedPlayer: ((state) => {
        for (const key in state.editedPlayer) {
            state.editedPlayer[key] = ''
        }
        if (state.editedPlayer.id) {
            delete state.editedPlayer.id
        }
    }),

    editPlayer: ((state, player) => {
        const index = state.players.findIndex(p => p.id === player.id)
        state.players.splice(index, 1, player)
    }),

    deletePlayer: ((state, playerId) => {
        const index = state.players.findIndex(p => p.id === playerId) //  (value) { if(value.id === playerId) return index }
        state.players.splice(index,1);
    }),

  insertPlayer: ((state, player) => {
    state.players.push(player)
  })
}
