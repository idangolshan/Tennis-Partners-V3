<template>
  <q-page>
    <q-card class="constrain text-center" flat>
      <q-card-section class="image-blurred-edge">
        <img
          src="../assets/PartnerForTennisLOGO.png"
        >
      </q-card-section>

      <q-tabs v-model="tab" class="text-primary">
        <q-tab label="התחבר" name="login"/>
        <q-tab label="הירשם" name="register"/>
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <login-with-email-and-pass/>
          <br>
          <google-login/>
        </q-tab-panel>

        <q-tab-panel name="register">
          <register/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>

</template>

<script>
import googleLogin from "../components/loginComp/googleLogin";
import loginWithEmailAndPass from "../components/loginComp/loginWithEmailAndPass";
import register from "components/loginComp/register";

export default {
  name: "signIn",
  components: {googleLogin, loginWithEmailAndPass, register},
  data() {
    return {
      tab: 'login'
    }
  },
  created() {
    if (window.user) {
      this.$router.push('/SearchForPlayers')
    }
  }
}

</script>

<style lang="sass" scoped>


</style>
