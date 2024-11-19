import axios from 'axios';
import {
  convertToFormData,
  formatToJSON,
  getSelectedCollection,
} from '../utils/helpers';
const API_URL = 'http://localhost:3000';
const API_URL2 = 'http://192.168.137.214:3001/api/v1';
const API_URL3 = 'http://localhost:3001/api/v1';
// const API_URL4 = 'https://marakifashion.onrender.com/api/v1';
const API_URL4 = 'https://marakifashion.onrender.com/api/v1';

// json-server --watch db.json --host 0.0.0.0 --port 3000

export async function getCollection() {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL2}/collections/6726e4fce719f198c1304f6b`,
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(data.data.data.collection);
    return data.data.data.document;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}

export async function selectCollection(id) {
  try {
    const collections = await getCollections();
    const previousSelected = await getSelectedCollection(collections);
    const updatePrev = await updateCollection(previousSelected.id, {
      isSelected: false,
    });
    console.log(updatePrev);
    const newSelected = await updateCollection(id, { isSelected: true });
  } catch (error) {
    console.log(error);
    throw new Error('There was an error while selecting collection!');
  }
}

export async function updateCollection(id, data) {
  try {
    console.log(data, id);
    const res = await axios({
      method: 'PATCH',
      url: `${API_URL2}/collections/${id}`,
      headers: { 'Content-Type': 'application/json' },
      data,
    });
    return res.data.data.document;
  } catch (error) {
    throw new Error('There was an error while updating collection!');
  }
}

export async function deleteCollection(id) {
  try {
    await axios({
      method: 'DELETE',
      url: `${API_URL2}/collections/${id}`,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    throw new Error('There was an error deleting the collection!');
  }
}

export async function getCollections() {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL2}/collections`,
      headers: { 'Content-Type': 'application/json' },
    });
    return data.data.data.documents;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}
export async function getProducts() {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL2}/products`,
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(data.data.data);
    return data.data.data.documents;
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(id) {
  // id = '6726984ce5ccc0c975643ef5';
  console.log(id);
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL2}/products/${id}`,
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(data.data);
    return data.data.data.document;
  } catch (error) {
    console.log(error);
    // throw error;
  }
}

export async function creatProduct(data) {
  console.log('create');
  try {
    delete data.rating;
    delete data.ratingsAverage;
    delete data.ratingCount;
    data.productDetails = formatToJSON(data.productDetails);
    data = convertToFormData(data);
    const res = await axios({
      method: 'POST',
      url: `${API_URL2}/products`,
      data,
    });
    console.log(res.data);
    return res.data.data.document;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}
export async function editProduct(data) {
  try {
    delete data.rating;
    delete data.ratingsAverage;
    delete data.ratingCount;
    const id = data.id;
    data.productDetails = JSON.stringify(formatToJSON(data.productDetails));
    data = convertToFormData(data);
    data.forEach((value, key) => {
      console.log(key, value);
    });
    delete data.id;
    const res = await axios({
      method: 'PATCH',
      url: `${API_URL2}/products/${id}`,
      data,
    });
    console.log(res.data);
    return res.data.data.document;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}

export async function deleteProduct(id) {
  console.log(id);
  try {
    await axios({
      method: 'DELETE',
      url: `${API_URL2}/products/${id}`,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    throw new Error('There was an error deleting the product!');
  }
}

export async function singupLogin(data, type) {
  try {
    const res = await axios({
      method: 'POST',
      url: `${API_URL2}/users/${type}`,
      headers: { 'Content-Type': 'application/json' },
      data,
    });
    return res.data.data.user;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}

export async function sendContactEmail(data) {
  try {
    const res = await axios({
      method: 'POST',
      url: `${API_URL2}/sendEmail/contact`,
      headers: { 'Content-Type': 'application/json' },
      data,
    });
    // console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}
