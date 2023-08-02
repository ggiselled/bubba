import { createStore } from 'vuex'

export default createStore({
  state: {
    collections: [], 
    selectedCollection: null, 
    selectedProduct: null, 
  },
  mutations: {
    setCollections(state, collections) {
      state.collections = collections
    },
    selectCollection(state, collection) {
      state.selectedCollection = collection
    },
    selectProduct(state, product) {
      state.selectedProduct = product
    },
  },
})