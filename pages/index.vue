<template>
  <div class="container">
    <h2>Товары:</h2>
    <div class="card-wrapper">
      <card
        :imgUrl="item.imageLink"
        :cardInfo="item"
        v-for="item in data"
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
  data() {
    return {
      data: [
        {
          id: 0,
          imageLink: "/_nuxt/static/products/product1.jpg",
          name: "Филадельфия с мандарином",
          description: "Описание товара",
          price: 349,
        },
        {
          id: 1,
          imageLink: "/_nuxt/static/products/product2.jpg",
          name: "Санта",
          description: "Описание товара",
          price: 299,
        },
        {
          id: 2,
          imageLink: "/_nuxt/static/products/product3.jpg",
          name: "АББА",
          description: "Описание товара",
          price: 449,
        },
        {
          id: 3,
          imageLink: "/_nuxt/static/products/product4.jpg",
          name: "Сет жирдяй",
          description: "Описание товара",
          price: 299,
        },
        {
          id: 4,
          imageLink: "/_nuxt/static/products/product5.jpg",
          name: "Калифорния",
          description: "Описание товара",
          price: 399,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 1780px;
  height: calc(100% - 70px);
  margin: 0 auto;
  .card-wrapper {
    width: 100% ;
    height: auto;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 1800px) {
    width: 95%;
  }
}
</style>
