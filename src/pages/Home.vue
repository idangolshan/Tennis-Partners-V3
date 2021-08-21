<template>
  <q-page >
    <div id="main">
      <div >
          <h1 class="text-white"> Welcome </h1>
          <h1 class="text-white"> to partners </h1>
          <h1 class="text-white ani"> for Tennis app </h1>

      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Home',
  // components: {
  //   Storage,
  // },
  // data() {
  //   return {
  //     tableName:'players',
  //     // isReload: false,
  //     refreshed:false,
  //     removed:false,
  //     file: null,
  //     filesUrl: [],
  //     tab: 'images' // quasar header related
  //   }
  // },
  // methods: {
  //
  // }
}
</script>

<style scoped>

#main{
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url("../assets/tennisCourtAllGreen.jpeg");
  background-size: cover;
  text-align: center;
}

.ani {
  animation: tennis 500ms alternate infinite;
}

@keyframes tennis {
  to {
    transform: translateY(-20%);
  }
}

/*.home {*/
/*  direction: rtl*/
/*}*/
/*.q-btn {*/
/*  margin: 10px;*/
/*  padding: 10px 10px 10px;*/
/*  cursor: pointer;*/
/*}*/
/*.fileBtn{*/
/*  display: flex;*/
/*  min-height: 10vh;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  flex-direction: column;*/
/*  width: 30%;*/
/*  padding: 10px;*/
/*  margin: 10px;*/
/*}*/

/*.AddItem, .TableViewer, .inputFile{*/
/*  position: relative; left: -50%;*/
/*}*/
</style>
