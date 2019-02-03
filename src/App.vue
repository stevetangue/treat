<template>
  <div id="app">
    <h1>Coffee app</h1>
    <nav>
      <router-link to="/">Login</router-link> => 
      <router-link to="/TreatDrink">Drink Type</router-link> =>  
      <router-link to="/TreatSize">Size</router-link> => 
      <router-link to="/TreatType">Type</router-link> => 
      <router-link to="/TreatMilkSugar">Milk and Sugar</router-link> =>  
      <router-link to="/TreatComment">Comment</router-link> 
      <br />
      <router-link to="/TreatOrderUser">Order User</router-link> || 
      <router-link to="/TreatOrderBarista">Order Barista</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data: {
    tDrink: ['coffee', 'tea'],
    tSize: ['S', 'M', 'L'],
    tType: ['flatWhite', 'longBlack', 'latte', 'cappuccino'],
    tMilkSugar: ['cow', 'almond', 'soy', 'lowFat'],
    tComment: ['comment message'],
    tOrderUser: [
      {
        username: 'SteveT',
        email: 'steve@redeye',
        phone: '0401000000',
        drink: 'coffee',
        size: 'M',
        type: 'longBlack',
        tComment: 'BYO cup',
      }
    ],
    tOrderBarista: [
      {
        username: 'SteveT',
        email: 'steve@redeye',
        phone: '0401000000',
        drink: 'coffee',
        size: 'M',
        type: 'longBlack',
        tComment: 'BYO cup',
        tStatus: 'Waiting', // Waiting, Making, Ready
      }
    ]
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
