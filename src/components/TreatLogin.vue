<template>
  <div class="order-box">
    <input class="order-box__input" placeholder="Your Name">
    <router-link to="/TreatDrink">
      <button>NEXT</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'TreatLogin'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .order-box {
    height: 500px;
    width: 500px;
    margin: 7em auto;
    border-radius: 3%;
    background-color: white;
    box-shadow: 0 0 15px 0 #c0bfbf;

    &__input {
      width: 60%;
      height: 40px;
      margin-top: 35%;
      border: 1px solid #d7d4d4;
      border-radius: 8px;
    }
  }
  .order-box__input::placeholder {
    font-size: 1.3em;
    font-style:italic;
    padding-left:0.5em;
  }
</style>
