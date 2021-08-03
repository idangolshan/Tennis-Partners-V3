<template>
  <div class="buttons">
    <q-btn icon="fab fa-google" class="glossy" rounded color="blue"
           @click="signInWithGoogle()">התחבר באמצעות גוגל
    </q-btn>
    <br>
  </div>
</template>

<script>
import firebaseAuth from '../../middleware/firebase/firestore/auth'

export default {
  name: "googleLogin",
  methods: {
    signInWithGoogle() {
      firebaseAuth.loginWithGoogle().then(() => {

        this.$q.notify({
          type: 'positive',
          message: 'Welcome Back!'
        })
        this.$router.push('/searchComponent')
      })
    }
  }
}
</script>

<style scoped>

</style>
