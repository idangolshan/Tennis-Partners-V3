<template>
  <div>
    <div class="q-pa-md">
      <q-table
          :title="tableName"
          :data="this.players"
          :columns="columns"
          row-key="name"
          binary-state-sort
          dir="rtl"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props" @click="goToItem(props.row.id)" id="name">{{ props.row.name }}</q-td>
            <q-td key="gender" :props="props">{{ props.row.gender }}</q-td>
            <q-td key="age" :props="props">{{ props.row.age }}</q-td>
            <q-td key="district" :props="props">{{ props.row.district }}</q-td>
            <q-td key="city" :props="props">{{ props.row.city }}</q-td>
            <q-td key="tennisCourt" :props="props">{{ props.row.tennisCourt }}</q-td>
            <q-td key="level" :props="props">{{ props.row.level }}</q-td>
            <q-td key="timesAWeek" :props="props">{{ props.row.timesAWeek }}</q-td>
            <q-td key="days" :props="props">{{ props.row.days }}</q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <div class="loading" v-show="loading"> </div>
    <q-btn @click="getWithoutCurrentUser">click</q-btn>
  </div>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: "TableViewer",
  props: ['tableName'],
  data() {
    return {
      loading : false,
      columns: [
        {
          name: 'name',
          required: true,
          label: 'שם שחקן',
          align: 'center',
          field: row => row.name,
          sortable: true
        },
        {name: 'gender', align: 'center', label: 'מין', field: 'gender', sortable: true},
        {name: 'age', align: 'center', label: 'גיל', field: 'age', sortable: true},
        {name: 'district', align: 'center', label: 'אזור בארץ', field: 'district', sortable: true},
        {name: 'city', align: 'center', label: 'עיר', field: 'city', sortable: true},
        {name: 'tennisCourt', align: 'center', label: 'מגרש מועדף', field: 'tennisCourt'},
        {name: 'level', align: 'center', label: 'רמה', field: 'level', sortable: true},
        {name: 'timesAWeek', align: 'center', label: 'תדירות משחק שבועית', field: 'timesAWeek'},
        {name: 'days', align: 'center', label: 'ימים מועדפים', field: 'days'},
      ]
    }
  },
  computed: {
    ...mapState('players', ['editedPlayerId', 'players']),
    getWithoutCurrentUser() {
      return this.filterCurrentPlayer()
    },
  },
  methods: {
    ...mapGetters('players',['filterCurrentPlayer']),
    ...mapActions('players', ['deletePlayer', 'getPlayersAc']), // שלוש נקודות לפני המאפ זה כי הוספנו עוד פונקציה לוקאלית למאפ אקשיונס
    goToItem(id) {
      this.$router.push(`/userInfo/${id}`)
    },
    // getWithoutCurrentUser() {
    //   let oldPlayers = this.players
    //   console.log(oldPlayers,'olddddddd')
    //   let newPlayers = this.filterCurrentPlayer()(window.user.uid)
    //   console.log(newPlayers,'newwwwwwwwwwww')
    // }
  },
  async created() {
    this.loading = true
    await this.getPlayersAc()
      this.loading = false

  }
}
</script>

<style scoped>

</style>
