<template>
  <div>
    <q-input rounded outlined v-model="user.email"
             label="אימייל*" :rules="[ val => val && val.length > 0 || 'Please enter your email']"
             lazy-rules
             type="email">
      <template v-slot:append>
        <q-icon name="mail"/>
      </template>
    </q-input>
    <q-input rounded outlined ref="password" v-model="user.password"
             label="סיסמא*" :rules="[ val => val && val.length > 0 && val.length < 100 || 'אנא הכנס סיסמא']"
             :type="isPwd ? 'password' : 'text'"
             lazy-rules>
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <br>
    <div class="buttons">
      <q-btn class="glossy" rounded color="blue" @click="loginWithEmailAndPassword(user.email, user.password)">
        התחבר באמצעות שם משתמש וסיסמא
      </q-btn>
    </div>
  </div>
</template>

<script>

import firebaseAuth from '../../middleware/firebase/firestore/auth'

export default {
  name: "loginWithEmailAndPass",
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      isPwd: true
    }
  },
  methods: {
    loginWithEmailAndPassword(email, password) {
      firebaseAuth.plainSignIn(email, password).then(()=>{
        this.$q.notify({
          type: 'positive',
          message: 'Welcome Back!'
        })
        this.$router.push('/SearchForPlayers')
      })
      }
    }
}
</script>

<style scoped>

</style>
