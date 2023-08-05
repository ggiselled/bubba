// import { apiEndpoint } from '../config'
// import { CreateItemRequest } from '../types/CreateItemRequest';
// import { Item } from '../types/Item';
// import Axios from 'axios'

// export async function createItem(
//   newItem: CreateItemRequest
// ): Promise<Item> {
//   const response = await Axios.put(`${apiEndpoint}/items`,  JSON.stringify(newItem), {
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*'
//     }
//   })
//   return response.data.item
// }

// const onItemCreate = async () => {
//     try {
//       const newItem = await createItem( {
//         itemId: this.state.newItemItemId,
//         name: this.state.newItemName,
//         price: this.state.newItemPrice
//       })
//     } catch {
//       alert('Item creation failed')
//     }
//   }