const products = [
  {
    id: 1,
    productName: "Wireless Mouse",
    category: "Electronics",
    price: 850,
    rating: 4.5,
    stock: 30
  },
  {
    id: 2,
    productName: "Bluetooth Headphones",
    category: "Electronics",
    price: 2200,
    rating: 4.7,
    stock: 50
  },
  {
    id: 3,
    productName: "Office Chair",
    category: "Furniture",
    price: 7500,
    rating: 4.2,
    stock: 12
  },
  {
    id: 4,
    productName: "Water Bottle",
    category: "Home & Kitchen",
    price: 350,
    rating: 4.1,
    stock: 100
  },
  {
    id: 5,
    productName: "Gaming Keyboard",
    category: "Electronics",
    price: 3200,
    rating: 4.8,
    stock: 20
  }
];


// process

// TODO Filter => Electronics
// TODO Sort by rating 
// TODO slice => first 3 (top 2)
// TODO Map => transform object shape to {name: "Name"}

const topElectronicsProducts = products.filter((item) => item.category === "Electronics").sort((a, b) => b.rating - a.rating).slice(0, 3).map((item) => {
    return {name: item.productName}
});
console.log(topElectronicsProducts);