<template>
  <div>
    <span> הכנס את פרטייך מטה ולאחר מכן לחץ על - הרשמה לאתר </span>
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
    <q-input rounded outlined ref="passwordRepeat" v-model="user.passwordRepeat"
             :rules="[ val => val === user.password || 'Passwords do not match']"
             :type="isPwd ? 'password' : 'text'"
             label="חזור על הסיסמא*"
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
      <q-btn class="glossy" rounded color="blue" @click="registerUser(user.email, user.password)">הרשמה לאתר</q-btn>
    </div>
  </div>
</template>

<script>
import firebaseAuth from '../../middleware/firebase/firestore/auth'

export default {
  name: "register",
  created() {

  },
  data() {
    return {
      id: '',
      user: {
        email: '',
        password: '',
        passwordRepeat: ''
      },
      isPwd: true
    }
  },
  methods: {
    async registerUser(email, password) {
      firebaseAuth.register(email, password).then(() => {
        this.$q.notify({
          type: 'positive',
          message: 'Welcome!'
        })
        const path = this.editUserInfoPath()
        debugger
        console.log(path, 'PAAAAAAAAAAATTTTTTTTTTTTTTTHHHHHHHHHHHH')
        this.$router.push(path);

        // לסדר שישלח אחרי הרשמה לטאב "הפרטים שלי"
      })
    },
    editUserInfoPath() {
      // For userInfo path
      this.id = localStorage.getItem('uid')
      debugger
      return '/userInfo/' + this.id;
    },
  }
}
</script>

<style scoped>

</style>
