import state from './players.state';
import mutations from './players.mutations';
import actions from './players.actions'
import getters from './players.getters'

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}