let products = [
  { price: 100, discount: 15 },
  { price: 150, discount: 15 },
  { price: 340, discount: 25 },
  { price: 400, discount: 10 },
  { price: 600, discount: 20 },
];

function calculateTotal() {
  let totalPrice = 0;
  products.forEach((product) => {
    let discountPrice =
      product.price - (product.price * product.discount) / 100;
    totalPrice += discountPrice;
  });
  console.log("Total Price:", totalPrice);
}
calculateTotal();
