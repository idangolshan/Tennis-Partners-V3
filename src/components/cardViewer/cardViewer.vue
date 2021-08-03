<template>
  <div class="container">
    <q-card class="flex-card" style="background: radial-gradient(circle, #676d71 50%, #7a93a8 100%)" >
      <q-list>
        <q-item >
        <h5>שם:
          {{player.name}}
        </h5>
        </q-item>
      <q-separator />

      <q-card-section>
        <div class="lable">גיל:</div>
        {{player.age}}
      </q-card-section>

      <q-card-section>
        <div class="lable">מין:</div>
        {{player.gender}}
      </q-card-section>

      <q-card-section>
        <div class="lable">אזור בארץ:</div>
        {{player.district}}
      </q-card-section>

      <q-card-section>
        <div class="lable">עיר:</div>
        {{player.city}}
      </q-card-section>

      <q-card-section>
        <div class="lable">רמה:</div>
        {{player.level}}
      </q-card-section>

      <q-card-section>
        <div class="lable">ימים מועדפים:</div>
        {{player.days}}
      </q-card-section>

      <q-card-section>
        <div class="lable">תדירות משחק שבועית:</div>
        {{player.timesAWeek}}
      </q-card-section>

      <q-card-section>
        <div class="lable">מגרש מועדף:</div>
        {{player.tennisCourt}}
      </q-card-section>
          </q-list>
    </q-card>


  </div>
</template>

<script>

export default {
  name: "cardViewer",
  props: ['player'],
  data() {
    return {
      loading: false,

    }
  }
}
</script>

<style scoped>
/*להעביר לקובץ css גבלובלי*/


.flex-card{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 600px;
  align-items: center;
  text-align: center;
  background: #606972;
  height: auto;
  margin: 10px;
  box-shadow: 0px 2px 8px 0px;
}

.flex-card:hover, .flex-card:focus-within  {
  background-color: rgba(151, 151, 182, 0.76);
}
</style>
