<template>
  <q-page class="custom">
    <add-player :playerIdFromParams="this.playerIdFromParams" :tableName="tableName"/>
  </q-page>
</template>

<script>
import AddPlayer from "components/player/addPlayer/addPlayer";
import db from "../middleware/firebase"


export default {
  name: "userInfo",
  components: {
    AddPlayer
  },
  data() {
    return {
      player: {},
      tableName: 'players',
      playerIdFromParams: ''
    }
  },
  methods: {
    // getItemById() {
    //   debugger
    //   return db.getPlayerById({entity: this.tableName, playerId: this.$route.params.id})
    //     .then (result=>{
    //       this.player = result
    //     })
    // }
  },
  created() {
    // this.getItemById()
    this.playerIdFromParams = this.$route.params.id
  }

}
</script>

<style scoped>

</style>
