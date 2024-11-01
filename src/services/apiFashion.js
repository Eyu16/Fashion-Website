import axios from 'axios';
import { getProductsByGender } from '../utils/helpers';
const API_URL = 'http://localhost:3000';
const API_URL2 = 'http://192.168.1.4:3000';
// json-server --watch db.json --host 0.0.0.0 --port 3000

export async function getCollection() {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL}/collections/1`,
      headers: { 'Content-Type': 'application/json' },
    });
    return data.data;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}
export async function getProducts(gender) {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL}/products`,
      headers: { 'Content-Type': 'application/json' },
    });

    return data.data;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}

export async function getProduct(id) {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL}/products/${id}`,
      headers: { 'Content-Type': 'application/json' },
    });

    return data.data;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}
