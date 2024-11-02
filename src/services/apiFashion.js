import axios from 'axios';
import { getProductsByGender } from '../utils/helpers';
const API_URL = 'http://localhost:3000';
const API_URL2 = 'http://192.168.1.4:3000';
const API_URL3 = 'http://localhost:3001/api/v1';
// json-server --watch db.json --host 0.0.0.0 --port 3000

export async function getCollection() {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL3}/collections/6725a1c40d2d3d56016538d6`,
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(data.data.data.collection);
    return data.data.data.document;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}
export async function getProducts(gender) {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL3}/products`,
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(data.data.data);
    return data.data.data.documents;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}

export async function getProduct(id) {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL3}/products/${id}`,
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(data.data);
    return data.data.data.document;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}
