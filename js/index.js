// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  const price = singleProduct.querySelector('.price span'); // value is on price.textContent (String)
  const quantity = singleProduct.querySelector('.quantity input'); // value is on quantity.value (String)

  const priceVal = parseFloat(price.textContent);
  const quantityVal = parseInt(quantity.value);
  const subtotalVal = priceVal * quantityVal;

  const subtotal = singleProduct.querySelector('.subtotal span')
  subtotal.textContent = subtotalVal;
  
  // ITERATION 3
  //... your code goes here

  return subtotalVal;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
