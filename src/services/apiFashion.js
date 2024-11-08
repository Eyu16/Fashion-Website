import axios from 'axios';
import { getProductsByGender } from '../utils/helpers';
const API_URL = 'http://localhost:3000';
const API_URL2 = 'http://192.168.43.241:3001/api/v1';
const API_URL3 = 'http://localhost:3001/api/v1';
const API_URL4 = 'https://marakifashion.onrender.com/api/v1';

// json-server --watch db.json --host 0.0.0.0 --port 3000

export async function getCollection() {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL4}/collections/6726e4fce719f198c1304f6b`,
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(data.data.data.collection);
    return data.data.data.document;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}
export async function getProducts() {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL4}/products`,
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
  // id = '6726984ce5ccc0c975643ef5';
  console.log(id);
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL4}/products/${id}`,
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(data.data);
    return data.data.data.document;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}

export async function singupLogin(data, type) {
  try {
    const res = await axios({
      method: 'POST',
      url: `${API_URL4}/users/${type}`,
      headers: { 'Content-Type': 'application/json' },
      data,
    });
    return res.data.data.user;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}
