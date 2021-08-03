<template>
  <div id="page">
<!--        <table-viewer/>-->
    <div class="flex-container">
<!--      <searchComponent/>-->
<!--      Number of players found: {{ this.vueFilteredPlayersCount }}-->
      <div class="flex-card-group" v-for="player of this.playersTableFromGetters">
        <card-viewer :player="player"/>
      </div>
    </div>
        <div class="loading" v-show="loading"> </div>
  </div>
</template>

<script>

import TableViewer from "components/tableViewer/TableViewer";
import CardViewer from "components/cardViewer/cardViewer";
import searchComponent from "components/searchComponent/searchComponent";
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
  name: "searchForPlayers",
  components: {CardViewer, TableViewer, searchComponent},
  data() {
    return {
      loading: false,
      playersTableFromGetters: [],
    }
  },
  computed: {
    ...mapState('players', ['players']),
    playersTableGetters() {
      return this.filterRelevantPlayers
    },
    // vueFilteredPlayersCount() {
    //   debugger
    //   return this.filteredPlayersCount()
    // }
  },
  methods: {
    ...mapGetters('players', ['filterCurrentPlayer','filterRelevantPlayers']),
    ...mapActions('players', ['deletePlayer', 'getPlayersAc']), // שלוש נקודות לפני המאפ זה כי הוספנו עוד פונקציה לוקאלית למאפ אקשיונס

  },
  async created() {
    this.loading = true
    await this.getPlayersAc()
    this.playersTableFromGetters = this.playersTableGetters()
    this.loading = false
  }
}
</script>

<style scoped>
/*להעביר לקובץ css גלובלי*/

.flex-container {
  direction: rtl;
  /*display: flex;*/
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #7b9578;
  overflow: visible;
}

</style>
