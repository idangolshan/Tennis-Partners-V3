<template>
  <q-layout view="lHh Lpr lFf" >
    <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-avatar size="90px">
            <img
              src="../assets/PartnerForTennisLOGO.png"
            >
          </q-avatar>

          <q-toolbar-title style="font-size: 20px">Partners For Tennis</q-toolbar-title>

          <q-btn v-if="this.id === 'false'" to="/signIn" flat round dense icon="login" size="15px" label="התחבר"/>
          <logOut v-if="this.id !== 'false'"/>
        </q-toolbar>

        <q-tabs v-model="tab">
          <q-route-tab icon="person" label="הפרטים שלי" :to=editUserInfoPath exact/>
          <q-route-tab icon="person_search" label="חיפוש שחקנים" :to=editSearchForPlayersPath exact/>
          <q-route-tab icon="question_answer" label="צ'אט" to="/chat" exact/>
        </q-tabs>
      </q-header>
      <q-page-container>
        <router-view/>
      </q-page-container>
    </q-layout>

  </q-layout>
</template>

<script>

import logOut from "components/loginComp/logOut";


export default {
  name: 'MainLayout',
  components: {
    logOut
  },
  created() {
    // For userInfo path
    this.id = localStorage.getItem('uid')
  },
  data() {
    return {
      id: false,
      tab: ''
    }
  },
  computed: {
    editUserInfoPath() {
        return '/userInfo/' + this.id;
    },
    editSearchForPlayersPath() {
      return '/searchForPlayers/' + this.id;
    }
  }
}
</script>
