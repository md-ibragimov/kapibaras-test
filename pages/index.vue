<template>
  <div class="container">
    <h2>Товары:</h2>
    <div class="card-wrapper">
      <card
        :imgUrl="item.imageLink"
        :cardInfo="item"
        v-for="item in $store.state.allProducts"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: { Card },
  name: "IndexPage",
};
</script>
<style lang="scss" scoped>
.container {
  width: 1780px;
  height: calc(100% - 70px);
  margin: 0 auto;
  .card-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media (max-width: 1800px) {
    width: 95%;
  }
}
</style>
