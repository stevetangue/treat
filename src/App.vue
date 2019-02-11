<template>
  <div id="app">
    <h1>Coffee app</h1>
    <div class="order-tracking-bar">
      <nav>
        <ul class="progress-bar" >
          <li v-for="route in routes" :key="route.url" class="progress-bar__items">

            <router-link :to="route.url">
              <i class="material-icons">check_circle_outline</i>
              <span>{{route.label}}</span>
            </router-link>
          </li>

          <!--<li><router-link to="/TreatOrderUser">Order User</router-link></li>-->
          <!--<li><router-link to="/TreatOrderBarista">Order Barista</router-link></li>-->
        </ul>
      </nav>
    </div>
    <div class="order-box">
      <router-view />
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  // import Component from 'vue-class-component';

  export default class App extends Vue {
    mockData = {
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

<style lang="less">
    body {
      background-color: #ececec;
      text-align: center;
      height: 100%;
      font-size: 16px;
    }

    .order-tracking-bar {
      padding: 1em 1em 0 1em;
    }

    .order-box {
      height: 30em;
      width: 40em;
      margin: 3em auto;
      border-radius: 3%;
      background-color: white;
      box-shadow: 0 0 15px 0 #c0bfbf;
    }
    .progress-bar {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &__items {

        a {
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }
        span {
          padding-top: 0.5em;
          color: black;
        }
      }
    }
</style>






