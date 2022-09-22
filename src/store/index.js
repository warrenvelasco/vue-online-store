import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      products: [],
      deletedProduct: null,
    }
  },
  mutations: {
    setProduct(state,payload) {
      state.products = payload
    },
    deleteProduct(state,payload) {
      state.deletedProduct = payload
    }
  },
  actions: {
    async loadProducts(context) {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const responseData = await response.json();

      if(!response.ok) {
        throw new Error( responseData.message || "Something went wrong");
      }

      const products = [];

      for (const key in responseData) {
        const product ={
          id: responseData[key].id,
          title: responseData[key].title,
          price: responseData[key].price,
          image: responseData[key].image,
          rate: responseData[key].rating.rate,
          count: responseData[key].rating.count,
          category: responseData[key].category,
          description: responseData[key].description,
        }

        products.push(product);
      }

      context.commit('setProduct', products);
    },
    async deleteProducts(context,payload) {
      const response = await fetch(`https://fakestoreapi.com/products/${payload}`, {
          method: "DELETE"
      });
      const responseData = await response.json();

      if (!response.ok) {
          // error
      }

      const deletedProduct = responseData
      console.log(deletedProduct)

      context.commit('deleteProduct', deletedProduct)

  }
  },
  getters: {
    products(state) {
      return state.products;
    },
    hasProducts(_,getters) {
      return getters.products && getters.products.length > 0;
    },
    deletedProduct(state) {
      return state.deletedProduct;
    }
  },
  modules: {
  }
})
