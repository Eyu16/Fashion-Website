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

export function formatDuplicateFieldError(message) {
  if (message.includes('duplicate field value')) {
    return 'This email has been registered already!';
  }
  return message;
}

export function formatToJSON(input) {
  // Remove the escaped quotes and newlines from the input string
  const cleanedInput = input.replace(/\\"/g, '').replace(/\n/g, ',');

  // Wrap the cleaned string with curly braces to form a valid object literal
  const formattedInput = `{${cleanedInput}}`;

  // Parse the string into a JSON object
  const formattedObject = JSON.parse(formattedInput);

  return formattedObject;
}
export function formatProductDetails(details) {
  return Object.entries(details)
    .map(([key, value]) => {
      // Capitalize the first letter of each word in the value
      const formattedValue = value
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace(/,/g, '\n'); // Replace commas with new lines

      // Format as "Key": "Value"
      return `"${key}": "${formattedValue}"`;
    })
    .join('\n');
}

export function convertToFormData(data) {
  const formData = new FormData();

  // Append text fields
  formData.append('name', data.name);
  formData.append('price', data.price);
  formData.append('description', data.description);
  formData.append('summary', data.summary);
  formData.append('gender', data.gender);

  // Append the productDetails object as a stringified JSON
  console.log(typeof data.productDetails);
  if (typeof data.productDetails !== 'string')
    formData.append('productDetails', JSON.stringify(data.productDetails));
  else formData.append('productDetails', data.productDetails);

  console.log(
    typeof formData.get('productDetails'),
    formData.get('productDetails')
  );

  // Handle the image file input (assuming data.image is a FileList)
  if (typeof data.image === 'string') formData.append('image', data.image);
  else {
    formData.append('image', data.image[0]);
  }

  // Handle the detailImage file input (assuming data.detailImage is a FileList)
  if (typeof data.detailImage === 'string') {
    formData.append('detailImage', data.detailImage);
  } else {
    formData.append('detailImage', data.detailImage[0]);
  }

  return formData;
}

export function filterProducts(products = [], filterBy) {
  console.log(products);
  console.log('filtering');
  return products.filter((product) =>
    product.name.toLowerCase().includes(filterBy.toLowerCase())
  );
}

export function getSelectedCollection(collections = []) {
  return collections.find((collection) => collection.isSelected);
}
