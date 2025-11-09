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

// const subTotalItems = cartItems.reduce((subtotal, product) => {
//   // console.log(subtotal, product)s
//   return subtotal + product.price * product.quantity
// }, 0)

const subTotal = cartItems.reduce((subtotal, product) => {
  return subtotal + product.price * product.quantity
}, 0)

console.log(subTotal)

//? console.log(subTotalItems)

const playerData = [
  { name: "Noman", data: 87 },
  { name: "Lionel Messi", data: 95 },
  { name: "Cristiano Ronaldo", data: 93 },
  { name: "Neymar Jr", data: 91 },
  { name: "Kylian Mbappé", data: 92 },
  { name: "Kevin De Bruyne", data: 91 },
  { name: "Mohamed Salah", data: 90 },
  { name: "Virgil van Dijk", data: 89 },
  { name: "Robert Lewandowski", data: 91 },
  { name: "Harry Kane", data: 88 },
  { name: "Luka Modrić", data: 87 }
];


const bestPlayer = playerData.reduce((goodPlayer, player) => {
  // console.log(goodPlayer, player)
  if (goodPlayer.data > player.data) {
    console.log(goodPlayer)
    return goodPlayer
  }
  return player
}, playerData[0])

// console.log(bestPlayer)


// const bestPlayer = playerData.reduce((bestScorer, player) => {
//   // console.log(bestScorer, player)
//   if (bestScorer.data > player.data) {
//     console.log(bestScorer)
//     return bestScorer
//   }
//   return player;
// }, playerData[0])