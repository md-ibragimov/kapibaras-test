<template>
  <header class="header">
    <nuxt-link exact to="/" class="logo"/>
    <nuxt-link exact active-class="navlink-active" to="/" class="navlink">Каталог</nuxt-link>
    <nuxt-link active-class="navlink-active" to="/basket" class="navlink">Корзина</nuxt-link>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  column-gap: 15px;
  .logo {
    width: 205px;
    height: 55px;
    display: block;
    background: url(../static/logo.svg) no-repeat no-repeat center;
    background-size: contain;
  }
  .navlink {
    font-size: 22px;
    color: #000;
    text-decoration: none;
  }
  .navlink-active {
    font-weight: 600;
    text-decoration: underline;
  }
}
</style>