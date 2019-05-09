<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->
<template>
  <div class="milk-sugar">
    <h1>
      <router-link to="/">
        <a href="#">[&laquo;]</a>
      </router-link>Coffee Time! > Milk
    </h1>
    <p>What do you feel like today?</p>

    <router-link to="/TreatOrderBarista">
      <button @click="orderCoffee('almond')">Almond</button>
    </router-link>
    <router-link to="/TreatOrderBarista">
      <button @click="orderCoffee('moomoofull')">Moo Moo Full</button>
    </router-link>
    <router-link to="/TreatOrderBarista">
      <button @click="orderCoffee('moolight')">Moo light</button>
    </router-link>
    <router-link to="/TreatOrderBarista">
      <button @click="orderCoffee('soy')">Soy</button>
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
  components: {}
})
class TreatMilkSugar extends Vue {
  /*
   * data
   */
  username = "steve";

  /*
   * components
   */

  /*
   * methods
   */
  orderCoffee(milk) {
    this.$store.dispatch('actionOrderMilk', milk);
  }
}
export default TreatMilkSugar;
</script>


<!-- *************************************************************************
	STYLE
	************************************************************************* -->
