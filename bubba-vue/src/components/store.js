import { createStore } from 'vuex'

const collections = [
  { 
    id: 1, 
    title: 'ORIGINALS',
    subtitle: 'LINE', 
    imageUrl: 'Originals/Originals3.jpg',
    products: [
      { id: 'Originals1', name: 'Original1', imageUrl: 'Originals/Originals1.jpg', images: 
      [
        'Totus vistas/Red Leather Bag.I01.2k.png', 
        'Totus vistas/Red Leather Bag.I02.2k.png',
        'Totus vistas/Red Leather Bag.I04.2k.png',
        'Totus vistas/Red Leather Bag.I05.2k.png',
        'Totus vistas/Red Leather Bag.I07.2k.png',
        'Totus vistas/Red Leather Bag.I09.2k.png',
        'Totus vistas/Red Leather Bag.I11.2k.png',
        'Totus vistas/Red Leather Bag.I13.2k.png',
        'Totus vistas/Red Leather Bag.I15.2k.png',
        'Totus vistas/Red Leather Bag.I16.2k.png'




      ] },
      { id: 'Originals2', name: 'Original2', imageUrl: 'Originals/Originals2.jpg', images: [/* ruta de las imágenes 3D aquí */] },
    ]
  },
  { 
    id: 2, 
    title: 'VICTORIA',
    subtitle: 'LINE', 
    imageUrl: 'Victoria/Victoria2.jpg',
    products: [
      { id: 'Victoria1', name: 'Producto 1', imageUrl: 'Victoria/Victoria1.jpg', images: [/* ruta de las imágenes 3D aquí */] },
      { id: 'Victoria2', name: 'Producto 3', imageUrl: 'Victoria/Victoria3.jpg', images: [/* ruta de las imágenes 3D aquí */] },
      { id: 'Victoria3', name: 'Producto 4', imageUrl: 'Victoria/Victoria4.jpg', images: [/* ruta de las imágenes 3D aquí */] },
    ]
  },
  { 
    id: 3, 
    title: 'FANCY', 
    subtitle: 'LINE',
    imageUrl: 'Fancy/Fancy1.jpg',
    products: [
      { id: 'Fancy1', name: 'Producto 1', imageUrl: 'Fancy/Fancy2.jpg', images: [/* ruta de las imágenes 3D aquí */] },
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