<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="barista">
    <h1>Order list</h1>
    <div class="order">
      <div class="order-detail">
        <span>03 - {{ order.username }}</span><span>|</span>
        <b> {{ order.type }} + {{ order.milk }}</b>
        <button class="btn-order-status">Start</button>
      </div>
    </div>
    <div class="order order-making">
      <div class="order-detail">
        <span>02 - Broccolini</span><span>|</span>
        <b>Flatwhite + Almond milk</b>
        <button class="btn-order-status">Done</button>
      </div>
    </div>
    <div class="order order-done">
      <div class="order-detail">
        <span>01 - GUI - Latte</span><span>|</span>
        <b>Latte with Moo Light</b>
      </div>
    </div>

    <router-link to="/">
      <button class="btn-new-order">New Order</button>
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
class TreatOrderBarista extends Vue {
  /*
   * data
   */

  /*
   * components
   */

  /*
   * methods
   */
  get order () {
    return this.$store.state.order;
  }
}
export default TreatOrderBarista;
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->
<style lang=less>
.barista {
  .order {
    font-size: 1.5rem;
    text-align: left;
    float:left;
    width: 100%;
    background:#f3f3f3;
    &.order-making {
      color: white;
      background:rgb(226, 195, 19);
      animation-name: color;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
    &.order-done {
      background: #bef6be;
      * {
        text-decoration: line-through;
      }
    }
    @keyframes color {
      0% {
        background: rgb(226, 195, 19);
      }
      50% {
        background: rgb(236, 175, 20);
      }
      100 {
        background: yellow;
      }
    }

    .order-detail {
      span:first-child {
        display: inline-block;
        width: 11rem;
        height: 1.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span, b {
        float: left;
        padding: 1rem;
        text-overflow: ellipsis;
        text-transform: capitalize;
      }
      button {
        float: right;
        margin: 1rem;
      }
    }
  }

  .btn-order-status {
    min-width: 5rem;
    padding: 0.5rem 0.75rem;
  }
  .btn-new-order {
    color: white;
    background: #4285f4;
  }
}

</style>