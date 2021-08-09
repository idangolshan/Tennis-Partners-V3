
export default {
  isItemGreaterThenX: state => X =>
        state.players.filter(player => player.level < X),

  filterCurrentPlayer: state => () => {
    debugger
    return state.players.filter(player => player.id !== window.user.uid)
  },
  filterRelevantPlayers: (state, getters, actions) => {
    let filteredPlayers = []
    //remove current user player from results
    filteredPlayers = getters.filterCurrentPlayer();
    debugger
    let id = localStorage.getItem('uid')
    debugger
    //filter the filteredPlayers array results for matching level & area players
    filteredPlayers = filteredPlayers.filter(player => player.district === state.editedPlayer.district )
    debugger
    return filteredPlayers
  },

  filteredPlayersCount: (state, getters) => () => {
    debugger
    return getters.filterCurrentPlayer.length
  }
}
