<template>
  <q-btn  flat round dense icon="logout" size="18px" @click="logOut()" label="התנתק"></q-btn>
</template>

<script>
import firebaseAuth from '../../middleware/firebase/firestore/auth'


export default {
  name: "logOut",
  methods: {
    async logOut() {
      await firebaseAuth.userLogout()
        debugger
        this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
