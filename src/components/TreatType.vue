<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->
  
<template>
  <div class="type">
    <h1>Coffee Time!</h1>
    <label>Name</label>
    <input type="text" v-model="username" placeholder="Enter full name">

    <div class="clearfix"></div>
    <label class="single">
      Shot Single
      <input type="radio" v-model="shot" name="shot" value="single" checked>
    </label>
    <label class="double">
      Double
      <input type="radio" v-model="shot" name="shot" value="double">
    </label>
    <div class="clearfix"></div>

    <router-link to="/TreatMilkSugar">
      <button @click="orderCoffee('cappuccino')">Cappuccino</button>
    </router-link>
    <router-link to="/TreatMilkSugar">
      <button @click="orderCoffee('chai-latte')">Chai Latte</button>
    </router-link>
    <router-link to="/TreatMilkSugar">
      <button @click="orderCoffee('dirty-chai')">Dirty Chai</button>
    </router-link>
    <router-link to="/TreatMilkSugar">
      <button @click="orderCoffee('flat-white')">Flat White</button>
    </router-link>
    <router-link to="/TreatMilkSugar">
      <button @click="orderCoffee('latte')">Latte</button>
    </router-link>
    <router-link to="/TreatOrderBarista">
      <button @click="orderCoffee('long-black')">Long Black</button>
    </router-link>
    <router-link to="/TreatOrderBarista">
      <button @click="orderCoffee('short-black')">Short Black</button>
    </router-link>
  </div>
</template>


<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {},
})
class TreatType extends Vue {
  /*
   * data
   */
  username = '';
  shot = 'single';

  /*
   * methods
   */
  orderCoffee(coffee) {
    /*eslint no-console: ["error", { allow: ["log"] }] */
    const order = {
      username: this.username,
      shot: this.shot,
      type: coffee
    }

    this.$store.dispatch('actionOrderType', order);
  }
}

export default TreatType;
</script>


<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style lang="less">
.type {
  font-size: 2rem;
  input[type="text"] {
    width: 50%;
    padding: 1rem;
    margin-left: 0.5rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    box-shadow: none;
    border: 1px solid #ddd;
    font-size: 1rem;
  }

  .single {
    margin-right: 1rem;
  }
}

button {
  min-width: 10rem;
  font-size: 1rem;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem 1rem 1rem 0;
}
.clearfix {
  clear: both;
}
</style>