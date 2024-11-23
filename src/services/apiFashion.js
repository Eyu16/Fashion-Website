import axios from 'axios';
import {
  convertToFormData,
  formatOrderData,
  formatToJSON,
  getSelectedCollection,
} from '../utils/helpers';
// const API_URL = 'http://localhost:3000';
// const API_URL2 = 'http://192.168.8.102:3001/api/v1';
// const API_URL3 = 'http://localhost:3001/api/v1';
// const API_URL4 = 'https://marakifashion.onrender.com/api/v1';
// const API_URL4 = 'https://marakifashion.onrender.com/api/v1';

// const API_URL = 'http://localhost:3001/api/v1';
// const API_URL = 'http://192.168.255.210:3001/api/v1';
const API_URL = 'https://marakifashion.onrender.com/api/v1';

// json-server --watch db.json --host 0.0.0.0 --port 3000

export async function getCollection() {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL}/collections/6726e4fce719f198c1304f6b`,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
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
    await updateCollection(previousSelected.id, {
      isSelected: false,
    });
    await updateCollection(id, { isSelected: true });
  } catch (error) {
    console.log(error);
    throw new Error('There was an error while selecting collection!');
  }
}

export async function updateCollection(id, data) {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `${API_URL}/collections/${id}`,
      headers: { 'Content-Type': 'application/json' },
      data,
      withCredentials: true,
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
      url: `${API_URL}/collections/${id}`,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
  } catch (error) {
    throw new Error('There was an error deleting the collection!');
  }
}

export async function getCollections() {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL}/collections`,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
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
      url: `${API_URL}/products`,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    return data.data.data.documents;
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(id) {
  try {
    const data = await axios({
      method: 'GET',
      url: `${API_URL}/products/${id}`,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
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
      url: `${API_URL}/products`,
      data,
      withCredentials: true,
    });
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
    delete data.id;
    const res = await axios({
      method: 'PATCH',
      url: `${API_URL}/products/${id}`,
      data,
      withCredentials: true,
    });
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
      url: `${API_URL}/products/${id}`,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
  } catch (error) {
    throw new Error('There was an error deleting the product!');
  }
}

export async function singupLogin(data, type) {
  try {
    const res = await axios({
      method: 'POST',
      url: `${API_URL}/users/${type}`,
      headers: { 'Content-Type': 'application/json' },
      data,
      withCredentials: true,
    });
    return res.data.data.user;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}
export async function logout() {
  try {
    await axios({
      method: 'POST',
      url: `${API_URL}/users/logout`,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    return null;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}
export async function getLoggedInUser() {
  try {
    const res = await axios({
      method: 'GET',
      url: `${API_URL}/users/currentUser`,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    return res?.data?.data?.user;
  } catch (error) {
    console.log(error);
    // throw new Error(error.response.data.message);
    return null;
  }
}

export async function sendContactEmail(data) {
  try {
    const res = await axios({
      method: 'POST',
      url: `${API_URL}/sendEmail/contact`,
      headers: { 'Content-Type': 'application/json' },
      data,
      withCredentials: true,
    });
    // console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}

export async function checkout(data) {
  try {
    const formatedData = formatOrderData(data);
    console.log(formatedData);
    const res = await axios({
      method: 'POST',
      url: `${API_URL}/orders`,
      headers: { 'Content-Type': 'application/json' },
      data: formatedData,
      withCredentials: true,
    });
    return res.data.data.order.paymentUrl;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}

export async function getAllOrders() {
  try {
    const res = await axios({
      method: 'GET',
      url: `${API_URL}/orders`,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    return res.data.data.documents;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}

export async function getCurrentUserOrders() {
  try {
    const res = await axios({
      method: 'GET',
      url: `${API_URL}/orders/myOrders`,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    return res.data.data.documents;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}
