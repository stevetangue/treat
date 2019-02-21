<template>
  <div class="type">
    <h1>Coffee Time!</h1>
    <label>Name </label>
    <input type="text" placeholder="Enter full name"/>

    <div class="clearfix"></div>
    <label class="single">
      Shot Single
      <input type="radio" name="shot" value="single" checked> 
    </label>
    <label class="double">
      Double
      <input type="radio" name="shot" value="double"> 
    </label>
    <div class="clearfix"></div>
    
    <router-link to="/TreatMilkSugar">
      <button>Cappuccino</button>
    </router-link>
    <router-link to="/TreatMilkSugar">
      <button>Chai Latte</button>
    </router-link>
    <router-link to="/TreatMilkSugar">
      <button>Dirty Chai</button>
    </router-link>  
    <router-link to="/TreatMilkSugar">
      <button>Flat White</button>
    </router-link>  
    <router-link to="/TreatMilkSugar">
      <button>Latte</button>
    </router-link>  
    <router-link to="/TreatOrderBarista">
      <button>Long Black</button>
    </router-link>  
    <router-link to="/TreatOrderBarista">
      <button>Short Black</button>
    </router-link>
  </div>
</template>


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