<template>
  <div class="container">
    <button
      @click="() => this.$store.commit('clearBasket')"
      class="clear-basket"
    >
      Очистить корзину
    </button>
    <basket-card
      :cardInfo="item"
      :imgUrl="item.imageLink"
      v-for="item in $store.state.allProducts"
      :key="item.id"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 1780px;
  height: calc(100% - 70px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  .clear-basket {
    width: max-content;
    height: auto;
  }
  @media (max-width: 1800px) {
    width: 95%;
  }
}
</style>