import { createStore } from 'vuex'

const collections = [
  { 
    id: 1, 
    title: 'ORIGINALS',
    subtitle: 'LINE', 
    imageUrl: '../../public/Originals/Originals3.jpg',
    products: [
      { id: 'Originals1', name: 'Original1', imageUrl: '../../public/Originals/Originals1.jpg', images: [/* ruta de las imágenes 3D aquí */] },
      { id: 'Originals2', name: 'Original2', imageUrl: '../../public/Originals/Originals2.jpg', images: [/* ruta de las imágenes 3D aquí */] },
    ]
  },
  { 
    id: 2, 
    title: 'VICTORIA',
    subtitle: 'LINE', 
    imageUrl: '../../public/Victoria/Victoria2.jpg',
    products: [
      { id: 'Victoria1', name: 'Producto 1', imageUrl: '../../public/Victoria/Victoria1.jpg', images: [/* ruta de las imágenes 3D aquí */] },
      { id: 'Victoria2', name: 'Producto 3', imageUrl: '../../public/Victoria/Victoria3.jpg', images: [/* ruta de las imágenes 3D aquí */] },
      { id: 'Victoria3', name: 'Producto 4', imageUrl: '../../public/Victoria/Victoria4.jpg', images: [/* ruta de las imágenes 3D aquí */] },
    ]
  },
  { 
    id: 3, 
    title: 'FANCY', 
    subtitle: 'LINE',
    imageUrl: '../../public/Fancy/Fancy1.jpg',
    products: [
      { id: 'Fancy1', name: 'Producto 1', imageUrl: '../../public/Fancy/Fancy2.jpg', images: [/* ruta de las imágenes 3D aquí */] },
    ]
  },
]

export default createStore({
  state: {
    collections: collections, 
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