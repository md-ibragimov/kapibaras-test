export const state = () => ({
  products: [],
  allProducts: [{
    id: 0,
    imageLink: "product1",
    name: "Филадельфия с мандарином",
    description: "Описание товара",
    price: 349,
    count: 0
  },
  {
    id: 1,
    imageLink: "product2",
    name: "Санта",
    description: "Описание товара",
    price: 299,
    count: 0
  },
  {
    id: 2,
    imageLink: "product3",
    name: "АББА",
    description: "Описание товара",
    price: 449,
    count: 0
  },
  {
    id: 3,
    imageLink: "product4",
    name: "Филадельфия",
    description: "Описание товара",
    price: 299,
    count: 0
  },
  {
    id: 4,
    imageLink: "product5",
    name: "Калифорния",
    description: "Описание товара",
    price: 399,
    count: 0
  },]
});

export const mutations = {
  addCount(state, id) {
    state.allProducts = state.allProducts.map(el => {
      if (el.id === id) return {
        ...el,
        count: el.count + 1
      }
      else return el;
    })
  },
  removeCount(state, id) {
    state.allProducts = state.allProducts.map(el => {
      if (el.id === id) return {
        ...el,
        count: el.count - 1
      }
      else return el;
    })
  }
}