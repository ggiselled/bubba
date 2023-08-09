import { apiEndpoint } from '../config'
import Axios from 'axios'
export async function createItem( newItem ) {
  const response = await Axios.put(`${apiEndpoint}/items`,  JSON.stringify(newItem), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    //   "Access-Control-Allow-Methods": "POST"    
    }
  })
  return response.data.item
}

// export async function saveFormData(formData) {
//   try {
//     const response = await Axios.post(`${apiEndpoint}/items`,JSON.stringify(formData), {
//       headers: {
//         'Content-Type': 'application/json',
//         // 'Access-Control-Allow-Origin': '*'
//       },
//     });

//     return response.data; // O cualquier dato específico que esperas recibir de la API
//   } catch (error) {
//     throw new Error('Error al enviar el formulario: ' + error.message);
//   }
// }