<template>
  <div class="card-item">
    <img class="card-image" :src="require(`../static/products/${imgUrl}.jpg`)" alt="" />
    <span>{{ cardInfo.name }}</span>
    <span>{{ cardInfo.description }}</span>
    <div class="interaction">
      <span v-if="cardInfo.count===0">{{ cardInfo.price }} руб</span>
      <span v-else>{{ cardInfo.price * cardInfo.count }} руб</span>
      <button @click="() => this.$store.commit('addCount', this.cardInfo.id)" v-if="cardInfo.count === 0" class="add-product">
        Добавить
      </button>
      <div v-else class="counter-wrapper">
        <button @click="() => this.$store.commit('removeCount', this.cardInfo.id)" class="decrement">-</button>
        <span class="counter-value">{{ cardInfo.count }}</span>
        <button @click="() => this.$store.commit('addCount', this.cardInfo.id)" class="increment">+</button>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    props: {
      cardInfo: Object,
      imgUrl: String
    },
    watch: {
      count(value) {
        this.$store.commit('changeProductList', {
          ...this.cardInfo,
          count: this.count
        })
      }
    }
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