<template>
  <div class="login">
    <input type="text" class="order-box__input" placeholder="Username">
    <input type="password" class="order-box__input" placeholder="Password">
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

  .login {
    padding-top: 7em;
    input[type="text"],
    input[type="password"] {
      width: 60%;
      height: 4em;
      margin-bottom: 2em;
      border: 1px solid #d7d4d4;
      border-radius: 8px;

      &::placeholder {
        font-size: 1.3em;
        padding-left:0.5em;
      }
    }
    button {
      display: block;
    }

  }



</style>
