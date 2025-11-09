const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2288, quantity: 1 },
  {
    id: "p-004",
    name: "Samsung Power Bank 10000mAh",
    price: 2200,
    quantity: 1,
  },
  { id: "p-005", name: "Mi Wireless Earbuds", price: 2850, quantity: 2 },
  { id: "p-006", name: "Sony Bluetooth Speaker", price: 4900, quantity: 1 },
  { id: "p-007", name: "RFL Water Bottle", price: 180, quantity: 3 },
  { id: "p-008", name: "Casio Digital Watch", price: 3200, quantity: 1 },
  { id: "p-009", name: "Apple Lightning Cable", price: 1250, quantity: 1 },
  { id: "p-010", name: "Bata Leather Shoes", price: 3750, quantity: 1 },
];

const subTotal = cartItems.reduce((acc, item) => {} , 0)

console.log(cartItems)