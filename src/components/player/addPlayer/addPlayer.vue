<template>
  <div class="container">
  <div class="q-pa-md" id="inputs">
    <q-input rounded outlined autogrow v-model="localEditedPlayer.name" label="שם שחקן" class="input"/>

    <q-select rounded outlined autogrow v-model="localEditedPlayer.gender" label="מין"
              :options="genderOptions" class="input"/>

    <q-select type="number" rounded outlined autogrow v-model="localEditedPlayer.age" :options="ageOptions"
              label="גיל" class="input"/>
    <q-select rounded outlined autogrow v-model="localEditedPlayer.district" :options="areaOptions"
              label="אזור בארץ" class="input"/>

    <q-input rounded outlined autogrow v-model="localEditedPlayer.city" label="עיר" class="input"/>

    <q-input rounded outlined autogrow v-model="localEditedPlayer.tennisCourt" label="מגרש מועדף"
             class="input"/>

    <q-select rounded outlined autogrow v-model="localEditedPlayer.level" :options="levelOptions"
              label="רמה" class="input"/>

    <q-input rounded outlined autogrow v-model="localEditedPlayer.timesAWeek" label="תדירות משחק שבועית"
             class="input"/>

    <q-input rounded outlined autogrow v-model="localEditedPlayer.days" label="ימים מועדפים" class="input"/>

    <q-btn class="glossy btn__center" rounded color="blue" label="הכנס אותי למערך השחקנים" @click="insert()"/>
<!--    <q-btn v-if="$route.params.id" class="glossy" rounded color="blue" label="עדכן" @click="update($route.params.id)"/>-->
  </div>
  <div class="loading" v-show="loading"> </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  name: "addPlayer",
  props: ['playerIdFromParams','tableName'],
  computed: mapState('players', ['editedPlayer']), // טוענים את ה state לקומפוננטה רק לתצוגה כי אין יכולת לשנות אותו מפה
  data() {
    return {
      loading: false,
      ageOptions: [],
      genderOptions:['זכר','נקבה'],
      levelOptions: ["1 - שחקן בעל דירוג עולמי-עיסוק עיקרי ATP",
        "2 -  שחקן בעל דירוג עולמי ATP",
        "3 - שחקן המשחק שנים רבות ולמד מספר שנים בבית ספר לטניס , השתלב בתחרויות מגיל צעיר ואף היה בעל דרוג ארצי",
        "4 -  שחקן המשחק מספר שנים בעל טכניקה גבוהה , יכול להשתמש בכח וסיבוביות (ספין) ומסוגל לעמוד בקצב משחק מהיר",
        "5 - שחקן המתאמן מעל שנתיים לפחות ולוקח שיעורים עם מאמן , יציב בכול סוגי החבטות ושולט במשחק רשת ברמה גבוהה",
        "6 - שחקן המציג שליטה טובה בכל סוגי החבטות כולל משחק רשת ברמה סבירה",
        "7 - שחקן יציב יחסית במשחק עם כדורים בקצב נמוך",
        "8 - שחקן היכול לכוון כדור לצדדים ולשמור על ראלי בצורה סבירה",
        "9 - שחקן המשחק כמה חודשים. יכול  להעביר  ולהחזיר חבטות כף יד בקצב איטי",
        "10 - שחקן זה רק התחיל לשחק טניס,  יכול לשחק עם כדורי טניס רגילים ועוד לא פיתח מיומנות או טכניקה"],

      areaOptions: ["צפון","דרום","מרכז","אזור ירושלים","השרון-שומרון","חיפה והגליל המערבי","תל אביב"],
      localEditedPlayer: {
        name: '',
        gender: '',
        age: 0,
        district: '',
        city: '',
        tennisCourt: '',
        level: '',
        timesAWeek: '',
        days: '',
      },
      isAge: true
    }
  },
  methods: {
    ...mapActions('players', ['insertPlayer', 'updatePlayer', 'setEditPlayerById']),
    // שלוש נקודות לפני המאפ זה כי הוספנו עוד פונקציה לוקאלית למאפ אקשיונס
    ...mapMutations('players', ['setEditedPlayer', 'setEditedPlayerId']),

    localSetEditedPlayer() {
      this.setEditedPlayer(this.localEditedPlayer)
    },
    goToSearch() {
      this.$router.push('/SearchForPlayers/' + this.playerIdFromParams);
    },
    insert() {
      this.localSetEditedPlayer();
      this.insertPlayer();
      this.goToSearch()
    },
    update() {
      this.localSetEditedPlayer();
      this.updatePlayer();
      this.goToSearch();
    },
    ageOptionsCreator() {
      for (let i =18; i<=90; i++){
        this.ageOptions.push(i)
      }
    }
  },
  created() {
    this.loading = true
    this.ageOptionsCreator()
    this.setEditPlayerById(this.playerIdFromParams)
        .then(() => {
          Object.assign(this.localEditedPlayer, this.editedPlayer)
          this.loading = false
        })
  }
}
</script>

<style scoped>

#inputs {
  direction: rtl;
  width: 60%;
}

.input {
  direction: rtl;
  margin: 15px;
}

</style>
