import { createStore } from 'vuex'

const collections = [
  { 
    id: 1, 
    title: 'CLASSIC Y MATTE',
    subtitle: 'COLLECTION', 
    imageUrl: 'Originals/classic-port.png',
    products: [
      { id: 'Originals1', 
      name: 'CLASSIC REGULAR', 
      imageUrl: 'Originals/classicp1.png', 
      colors: ['#BA116D', '#7cd8ce', '#bfa6a9', '#22262B', '#E6A200', '#14BFBC', '#FB8483', '#0E1109'],
      colorImages: {
        '#BA116D': [
          
          //PinkMatte
        ],
        '#7cd8ce': [
          //LightblueMatte
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010001.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010002.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010003.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010004.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010005.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010006.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010007.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010008.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010009.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010010.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010011.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010012.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010013.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010014.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010015.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010016.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010017.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010018.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010019.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010020.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010021.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010022.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010023.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010024.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010025.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010026.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010027.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010028.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010029.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010030.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010031.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010032.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010033.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010034.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010035.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010036.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010037.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010038.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010039.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010040.png',
          '/Variantes Classic Regular/R3 - Classic Regular Cian Matte/010041.png',
        ],
        '#bfa6a9': [
          //lightvioletMatte
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010001.png', 
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010002.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010003.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010004.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010005.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010006.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010007.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010008.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010009.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010010.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010011.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010012.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010013.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010014.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010015.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010016.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010017.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010019.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010020.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010021.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010022.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010023.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010024.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010025.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010026.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010027.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010028.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010029.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010030.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010031.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010032.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010033.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010034.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010035.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010036.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010037.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010038.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010039.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010040.png',
          'mochi-rosa/R1 - Classic Regular Backpack Rosa/010041.png',
        ],
        '#22262B':[
          //blackMatte
        ],
        '#E6A200': [
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010001.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010002.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010003.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010004.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010005.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010006.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010007.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010008.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010009.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010010.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010011.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010012.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010013.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010014.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010015.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010016.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010017.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010018.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010019.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010020.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010021.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010022.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010023.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010024.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010025.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010026.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010027.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010028.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010029.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010030.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010031.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010032.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010033.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010034.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010035.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010036.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010037.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010038.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010039.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010040.png',
          '/Variantes Classic Regular/R2 - Classic Regular Backpack Amarilla/010041.png',

        ],
        '#14BFBC': [
          //lightblue

        ],
        '#FB8483': [
          //pink
        ],
        '#0E1109': [
          //black
        ]
      }
      },
      { id: 'Originals2', 
      name: 'CLASSIC MINI', 
      imageUrl: 'Originals/classicp2.png', 
      colors: ['#BA116D', '#7cd8ce', '#bfa6a9', '#22262B', '#E6A200', '#14BFBC', '#FB8483', '#0E1109'],
      colorImages: {
        '#BA116D': [
          //pinkMatte
        ],
        '#7cd8ce': [
          //'lightblueMatte'
        ],
        '#bfa6a9': [
          //lightvioletMatte
        ],
        '#22262B': [
          //blackMatte
        ],
        '#E6A200': [
          //yellow
        ],
        '#14BFBC': [
          //lightblue
          '/mochi-celeste/R1 - Classic Mini Backpack/010001.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010002.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010003.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010004.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010005.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010006.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010007.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010008.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010009.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010010.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010011.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010012.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010013.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010014.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010015.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010016.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010017.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010018.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010019.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010020.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010021.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010022.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010023.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010024.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010025.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010026.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010027.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010028.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010029.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010030.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010031.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010032.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010033.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010034.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010035.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010036.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010037.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010038.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010039.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010040.png',
          '/mochi-celeste/R1 - Classic Mini Backpack/010041.png'
        ],
        '#FB8483': [
          //pink
        ],
        '#0E1109':[
          //black
        ]
      } },
    ]
  },
  { 
    id: 2, 
    title: 'VICTORIA',
    subtitle: 'COLLECTION', 
    imageUrl: 'Victoria/victoria-port.png',
    products: [
      { id: 'Victoria1', 
      name: 'CARTERA', 
      imageUrl: 'Victoria/victoriap1.png', 
      colors: ['#DB9382', '#B1B9A6', '#282622', '#C1A9DC'],
      colorImages: {
        '#DB9382': [
          //pink
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
          '/riño-rosa/R2/010018.png',
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
        ],
        '#B1B9A6': [
          //green
        ],
        '#282622': [
          //black
        ],
        '#C1A9DC': [
          //lightviolet
        ]
      }
      },
      { id: 'Victoria2', 
      name: 'TOTE BAG', 
      imageUrl: 'Victoria/victoriap2.png', 
      colors: ['#DB9382', '#B1B9A6', '#282622', '#C1A9DC'],
      colorImages: {
        '#DB9382': [
          //pink
        ],
        '#B1B9A6': [
          //green
        ],
        '#282622': [
          //black
        ],
        '#C1A9DC': [
          //lightviolet
        ]
      }
    },
    { id: 'Victoria3', 
    name: 'MOCHILA', 
    imageUrl: 'Victoria/victoriap3.png', 
    colors: ['#DB9382', '#B1B9A6', '#282622', '#C1A9DC'],
    colorImages: {
      '#DB9382': [
        //pink
      ],
      '#B1B9A6': [
        //green
      ],
      '#282622': [
        //black
      ],
      '#C1A9DC': [
        //lightviolet
      ]
    }
    },
      
    ]
  },
  { 
    id: 3, 
    title: 'PUFFER', 
    subtitle: 'COLLECTION',
    imageUrl: 'Puffer/puffer-port.png',
    products: [
      { id: 'Puffer1', 
      name: 'POUCH', 
      imageUrl: 'Puffer/pufferp1.png', 
      colors: ['#6A776C', '#271F22' ],
      colorImages: {
        '#6A776C': [
          //green
          '/puffer-verde/R1 - Pouch Bubba Puffer/010001.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010002.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010003.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010004.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010005.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010006.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010007.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010008.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010009.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010010.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010011.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010012.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010013.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010014.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010015.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010016.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010017.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010018.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010019.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010020.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010021.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010022.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010023.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010024.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010025.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010026.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010027.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010028.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010029.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010030.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010031.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010032.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010033.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010034.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010035.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010036.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010037.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010038.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010039.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010040.png',
          '/puffer-verde/R1 - Pouch Bubba Puffer/010041.png',
        ],
        '#271F22': [
          //black
        ]
      } },
      { id: 'Puffer2', 
      name: 'TRAVEL BAG', 
      imageUrl: '/Puffer/pufferp2.png', 
      colors: ['#6A776C', '#271F22' ],
      colorImages: {
        '#6A776C': [
          //green
        ],
        '#271F22': [
          //black
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010001.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010002.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010003.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010004.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010005.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010006.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010007.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010008.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010009.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010010.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010011.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010012.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010013.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010014.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010015.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010016.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010017.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010018.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010019.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010020.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010021.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010022.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010023.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010024.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010025.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010026.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010027.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010028.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010029.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010030.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010031.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010032.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010033.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010034.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010035.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010036.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010037.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010038.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010039.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010040.png',
          '/bolsopuffer-negro/R1 - Travel Bag Puffer/010041.png',
        ]
      }
    
    },
      
    ]
  },
]

export default createStore({
  state: {
    collections: collections, 
    selectedCollection: null, 
    selectedProduct: null,
    selectedColor: null, 
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
    selectColor(state, color){
      state.selectedColor = color
    }
  },
})
