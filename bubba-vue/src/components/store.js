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
        '/riño-rosa/R2/010001.png', 
        '/riño-rosa/R2/010002.png',
        '/riño-rosa/R2/010003.png',
        '/riño-rosa/R2/010004.png',
        '/riño-rosa/R2/010005.png',
        '/riño-rosa/R2/010006.png',
        '/riño-rosa/R2/010007.png',
        '/riño-rosa/R2/010008.png',
        '/riño-rosa/R2/010009.png',
        '/riño-rosa/R2/010010.png',
        '/riño-rosa/R2/010011.png',
        '/riño-rosa/R2/010012.png',
        '/riño-rosa/R2/010013.png',
        '/riño-rosa/R2/010014.png',
        '/riño-rosa/R2/010015.png',
        '/riño-rosa/R2/010016.png',
        '/riño-rosa/R2/010017.png',
        '/riño-rosa/R2/010019.png',
        '/riño-rosa/R2/010020.png',
        '/riño-rosa/R2/010021.png',
        '/riño-rosa/R2/010022.png',
        '/riño-rosa/R2/010023.png',
        '/riño-rosa/R2/010024.png',
        '/riño-rosa/R2/010025.png',
        '/riño-rosa/R2/010026.png',
        '/riño-rosa/R2/010027.png',
        '/riño-rosa/R2/010028.png',
        '/riño-rosa/R2/010029.png',
        '/riño-rosa/R2/010030.png',
        '/riño-rosa/R2/010031.png',
        '/riño-rosa/R2/010032.png',
        '/riño-rosa/R2/010033.png',
        '/riño-rosa/R2/010034.png',
        '/riño-rosa/R2/010035.png',
        '/riño-rosa/R2/010036.png',
        '/riño-rosa/R2/010037.png',
        '/riño-rosa/R2/010038.png',
        '/riño-rosa/R2/010039.png',
        '/riño-rosa/R2/010040.png',
        '/riño-rosa/R2/010041.png',

      ] },
      { id: 'Originals2', name: 'Original2', imageUrl: 'Originals/Originals2.jpg', images: 
      [
        '/riño-rosa/R2/010001.png', 
        '/riño-rosa/R2/010002.png',
        '/riño-rosa/R2/010003.png',
        '/riño-rosa/R2/010004.png',
        '/riño-rosa/R2/010005.png',
        '/riño-rosa/R2/010006.png',
        '/riño-rosa/R2/010007.png',
        '/riño-rosa/R2/010008.png',
        '/riño-rosa/R2/010009.png',
        '/riño-rosa/R2/010010.png',
        '/riño-rosa/R2/010011.png',
        '/riño-rosa/R2/010012.png',
        '/riño-rosa/R2/010013.png',
        '/riño-rosa/R2/010014.png',
        '/riño-rosa/R2/010015.png',
        '/riño-rosa/R2/010016.png',
        '/riño-rosa/R2/010017.png',
        '/riño-rosa/R2/010019.png',
        '/riño-rosa/R2/010020.png',
        '/riño-rosa/R2/010021.png',
        '/riño-rosa/R2/010022.png',
        '/riño-rosa/R2/010023.png',
        '/riño-rosa/R2/010024.png',
        '/riño-rosa/R2/010025.png',
        '/riño-rosa/R2/010026.png',
        '/riño-rosa/R2/010027.png',
        '/riño-rosa/R2/010028.png',
        '/riño-rosa/R2/010029.png',
        '/riño-rosa/R2/010030.png',
        '/riño-rosa/R2/010031.png',
        '/riño-rosa/R2/010032.png',
        '/riño-rosa/R2/010033.png',
        '/riño-rosa/R2/010034.png',
        '/riño-rosa/R2/010035.png',
        '/riño-rosa/R2/010036.png',
        '/riño-rosa/R2/010037.png',
        '/riño-rosa/R2/010038.png',
        '/riño-rosa/R2/010039.png',
        '/riño-rosa/R2/010040.png',
        '/riño-rosa/R2/010041.png',
      
      ] },
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