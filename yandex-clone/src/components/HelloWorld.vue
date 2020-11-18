<template>
  <div class="hello">
    <div class="nav">
      <div class="nav-c">
       <ul>
          <li><a class="lang">EN</a></li>
          <li><a class="login">Log in</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../style/navbar.css");
</style>
