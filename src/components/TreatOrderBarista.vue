<template>
  <div class="barista">
    <h1>Order list</h1>
    <div class="order">
      <span>01 - Steve T - Flatwhite - Almond milk</span>
      <button class="btn-order-status">Start</button>
    </div>
    <div class="order order-making">
      <span>02 - Broccolini - Long Black</span> 
      <button class="btn-order-status">Making</button>
    </div>
    <div class="order order-done">
      <span>03 - GUI - Latte - Moo Light</span>
      <button class="btn-order-status">Done</button>
    </div>

    <router-link to="/">
      <button class="btn-new-order">New Order</button>
    </router-link>
  </div>
</template>

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

    &.order-done {
      background: #bef6be;
      text-decoration: line-through;
    }
    span {
      float: left;
      margin-top: 1.1rem;
      margin-left: 1rem;
    }
    button {
      float: right;
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