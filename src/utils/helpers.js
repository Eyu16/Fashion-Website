// export
export function getProductsByGender(products, gender) {
  // console.log(products);
  return products.filter(
    (product) => product.gender.toLowerCase() === gender.toLowerCase()
  );
}
