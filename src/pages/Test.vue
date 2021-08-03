<template>
<div id="page">
<div class="card" v-for="(user, index) in users">
  {{user.name}} {{index}}
  <button>see my details</button>
</div>

</div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      users: [
        {name: 'idan', age: 21, city: 'TelAbib', gender: 'male', details: 'lerem ipsum dolor bla bla', id: 1},
        {name: 'idan', age: 21, city: 'TelAbib', gender: 'male', details: 'lerem ipsum dolor bla bla', id: 2},
        {name: 'idan', age: 21, city: 'TelAbib', gender: 'male', details: 'lerem ipsum dolor bla bla', id: 3},
        {name: 'idan', age: 21, city: 'TelAbib', gender: 'male', details: 'lerem ipsum dolor bla bla', id: 4},
        {name: 'idan', age: 21, city: 'TelAbib', gender: 'male', details: 'lerem ipsum dolor bla bla', id: 5},
        {name: 'idan', age: 21, city: 'TelAbib', gender: 'male', details: 'lerem ipsum dolor bla bla', id: 6},
        {name: 'idan', age: 21, city: 'TelAbib', gender: 'male', details: 'lerem ipsum dolor bla bla', id: 7},
      ]
    }
  },

}
</script>

<style scoped>
#page {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
align-content: center;

}
  .card {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    background: #5f6368;
    margin: 5px;
  }
</style>
