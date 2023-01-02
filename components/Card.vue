<template>
  <div class="card-item">
    <img class="card-image" :src="imgUrl" alt="" />
    <span>{{ cardInfo.name }}</span>
    <span>{{ cardInfo.description }}</span>
    <div class="interaction">
      <span v-if="count===0">{{ cardInfo.price }} руб</span>
      <span v-else>{{ cardInfo.price * count }} руб</span>
      <button @click="count++" v-if="count === 0" class="add-product">
        Добавить
      </button>
      <div v-else class="counter-wrapper">
        <button @click="count--" class="decrement">-</button>
        <span class="counter-value">{{ count }}</span>
        <button @click="count++" class="increment">+</button>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    data() {
      return {
        count: 0
      }
    },
    props: {
      cardInfo: Object,
      imgUrl: String
    },
  }
</script>

<style lang="scss" scoped>
.card-item {
  width: 180px;
  height: 300px;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .card-image {
    width: 100%;
    height: 150px;
  }
  .interaction {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>