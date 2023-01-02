<template>
  <div id="container">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import "normalize.css";
import Header from "../components/Header.vue";
export default { components: { Header } };
</script>

<style lang="scss" scoped>
</style>