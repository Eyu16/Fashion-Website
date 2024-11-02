// export
export function getProductsByGender(products, gender) {
  // console.log(products);
  return products.filter(
    (product) => product.gender.toLowerCase() === gender.toLowerCase()
  );
}
export function formatedDetails(productDetails) {
  return Object.entries(productDetails).map(
    ([key, value]) => `${key}: ${value}`
  );
}

export function formatedProductName(productName) {
  return productName.split(' ').slice(0, 2).join(' ');
}
