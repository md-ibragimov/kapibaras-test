<template>
  <div v-if="!!cardInfo.count" class="basket-card-wrapper">
    <img
      class="card-image"
      :src="require(`../static/products/${imgUrl}.jpg`)"
    />
    <div class="card-info">
      <h3>{{ cardInfo.name }}</h3>
      <span>{{ cardInfo.description }}</span>
      <span>Количество: {{ cardInfo.count }} шт.</span>
      <span>Цена: {{ cardInfo.price * cardInfo.count }} руб</span>
      <button
        @click="() => this.$store.commit('deletePosition', cardInfo.id)"
        class="deleteposition"
      >
        Удалить позицию
      </button>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    props: {
      cardInfo: Object,
      imgUrl: String
    }
  }
</script>

<style lang="scss" scoped>
.basket-card-wrapper {
  width: 85%;
  height: 200px;
  margin: 0 auto;
  border: 1px solid;
  display: flex;
  align-items: center;
  position: relative;
  .card-image {
    width: 200px;
    height: 100%;
  }
  .deleteposition {
    position: absolute;
    top: 5px;
    right: 5px;
  }
}
</style>