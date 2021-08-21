
export default {
  isItemGreaterThenX: state => X =>
        state.players.filter(player => player.level < X),

  filterCurrentPlayer: state => () => {
    return state.players.filter(player => player.id !== window.user.uid)
  },

  filterRelevantPlayers: (state, getters, actions) => {
    let filteredPlayers = []
    //remove current user player from results
    filteredPlayers = getters.filterCurrentPlayer();
    let id = localStorage.getItem('uid')
    //filter the filteredPlayers array results for matching level & area players
    filteredPlayers = filteredPlayers.filter(player => player.district === state.editedPlayer.district )
    return filteredPlayers
  },

  filteredPlayersCount: (state, getters) => () => {
    return getters.filterCurrentPlayer.length
  }
}
