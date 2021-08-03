<template>
  <q-page >
    <div >
      <div class="row justify-between">

        <q-parallax :height="900"
                    src="https://images.unsplash.com/photo-1499510318569-1a3d67dc3976?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"
        >
          <h1 class="text-white"> Welcome </h1>
          <h1 class="text-white ani" > to tennis </h1>
          <h1 class="text-white"> partners finder app </h1>
        </q-parallax>

      </div>
    </div>
  </q-page>
</template>

<script>
// import Storage from "../components/storage";

// import CardViewer from "../components/CardViewer";

export default {
  name: 'Home',
  components: {
    Storage,
    // CardViewer
  },
  data() {
    return {
      tableName:'players',
      // isReload: false,
      refreshed:false,
      removed:false,
      file: null,
      filesUrl: [],
      tab: 'images' // quasar header related
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.home {
  direction: rtl
}
.q-btn {
  margin: 10px;
  padding: 10px 10px 10px;
  cursor: pointer;
}
.fileBtn{
  display: flex;
  min-height: 10vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  padding: 10px;
  margin: 10px;
}

.body{
  position: absolute; left: 50%;
}

.AddItem, .TableViewer, .inputFile{
  position: relative; left: -50%;
}

.ani {
  animation: tennis 500ms alternate infinite;
}

@keyframes tennis {
  to {
    transform: translateY(-20%);
  }
}

</style>
