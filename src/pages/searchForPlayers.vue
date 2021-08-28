<template xmlns="http://www.w3.org/1999/html">
  <q-layout>
    <div id="page">
      <div class="flex-container">
        <!--      <searchComponent/>-->
        <!--      Number of players found: {{ this.vueFilteredPlayersCount }}-->
        <div class="searchWrapper" >
          <q-input
            class="search-input"
            clearable
            color="blue-7"
            outlined
            v-model="searchQuery"
            label="חפש שחקן"
            type="text"
            style="width: 50%;">
          </q-input>
          <q-select></q-select>
          <div class="searchBox">
            <i class="fas fa-search"/>
            <q-btn class="searchBtn"/>
          </div>
        </div>

        <div v-if="playersTableFromGetters" class="flex-card-group" v-for="player of filteredPlayers">
          <card-viewer :player="player"/>
        </div>
        <div v-if="!playersTableFromGetters">
          לא נמצאו תוצאות חיפוש :(
        </div>
      </div>
      <div class="loading" v-show="loading"></div>
    </div>
  </q-layout>
</template>

<script>

// import TableViewer from "components/tableViewer/TableViewer";
import CardViewer from "components/cardViewer/cardViewer";
import searchComponent from "components/searchComponent/searchComponent";
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
  name: "searchForPlayers",
  components: {CardViewer, searchComponent},
  data() {
    return {
      loading: false,
      playersTableFromGetters: [],
      searchQuery: ""
    }
  },
  computed: {
    ...mapState('players', ['players']),
    getPlayersTableFromGetters() {
      //set the state editedPlayer
      return this.filterRelevantPlayers
    },
    filteredPlayers: function () {
        return this.playersTableFromGetters.filter((player) => {
              return player.name.match(this.searchQuery) ||
                player.age == this.searchQuery ||
                player.city.match(this.searchQuery) ||
                player.days.match(this.searchQuery) ||
                player.gender.match(this.searchQuery) ||
                player.level.match(this.searchQuery) ||
                player.district.match(this.searchQuery);
        })
    }
  },
  methods: {
    ...mapGetters('players', ['filterCurrentPlayer', 'filterRelevantPlayers']),
    // שלוש נקודות לפני המאפ זה כי הוספנו עוד פונקציה לוקאלית למאפ אקשיונס
    ...mapActions('players', ['deletePlayer', 'getPlayersAc', 'setEditPlayerById'])
  },

  async created() {
    this.loading = true
    await this.getPlayersAc()
    await this.setEditPlayerById(this.$route.params.id)
    this.playersTableFromGetters = this.getPlayersTableFromGetters()
    this.loading = false
  }
}
</script>

<style scoped>
/*todo - MOVE TO GLOBAL CSS FILE*/

.flex-container {
  direction: rtl;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /*background: #405262;*/
  overflow: visible;

}

.searchWrapper {
  display: flex;
  background: rgba(0,0,0,0.1);
  padding: 10px;
  position: relative;
}

.searchWrapper .search-input{
  background: rgb(227, 158, 50);


}

.searchBox {
  /*background: #ffec00;*/
  width: 10%;
  /*border-radius: 5px;*/
  max-width: 40px;
  position: relative;

}

.searchBox .fas{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
}

.searchBtn {
  height: 100%;
  width: 100%;

}

</style>
