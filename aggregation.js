// console.log("aggregation working")

const products = [
  {
    id: "p-001",
    productName: "Wireless Bluetooth Earbuds",
    category: "Electronics",
    price: 120,
    rating: 4.5,
    stock: 50,
  },
  {
    id: "p-002",
    productName: "Gaming Laptop",
    category: "Computers",
    price: 1500,
    rating: 4.8,
    stock: 20,
  },
  {
    id: "p-003",
    productName: "Smart LED TV 43 inch",
    category: "Home Appliances",
    price: 550,
    rating: 4.6,
    stock: 25,
  },
  {
    id: "p-004",
    productName: "Running Shoes",
    category: "Fashion",
    price: 95,
    rating: 4.3,
    stock: 70,
  },
  {
    id: "p-005",
    productName: "Men’s Leather Wallet",
    category: "Accessories",
    price: 45,
    rating: 4.2,
    stock: 120,
  },
  {
    id: "p-006",
    productName: "Portable Power Bank 20000mAh",
    category: "Electronics",
    price: 75,
    rating: 4.4,
    stock: 65,
  },
  {
    id: "p-007",
    productName: "Office Chair Ergonomic",
    category: "Furniture",
    price: 260,
    rating: 4.6,
    stock: 30,
  },
  {
    id: "p-008",
    productName: "Wireless Keyboard & Mouse Combo",
    category: "Computers",
    price: 60,
    rating: 4.5,
    stock: 80,
  },
  {
    id: "p-009",
    productName: "Smart Fitness Watch",
    category: "Wearables",
    price: 150,
    rating: 4.7,
    stock: 55,
  },
  {
    id: "p-010",
    productName: "Blender & Smoothie Maker",
    category: "Kitchen Appliances",
    price: 110,
    rating: 4.4,
    stock: 40,
  },
  {
    id: "p-011",
    productName: "Noise-Cancelling Headphones",
    category: "Electronics",
    price: 300,
    rating: 4.7,
    stock: 40,
  },
  {
    id: "p-012",
    productName: "Wooden Coffee Table",
    category: "Furniture",
    price: 180,
    rating: 4.3,
    stock: 35,
  },
  {
    id: "p-013",
    productName: "Wireless Security Camera",
    category: "Home Security",
    price: 220,
    rating: 4.6,
    stock: 25,
  },
  {
    id: "p-014",
    productName: "Smartphone 5G",
    category: "Mobiles",
    price: 850,
    rating: 4.8,
    stock: 45,
  },
  {
    id: "p-015",
    productName: "Electric Toothbrush",
    category: "Personal Care",
    price: 70,
    rating: 4.5,
    stock: 90,
  },
  {
    id: "p-016",
    productName: "Cotton Bed Sheet Set",
    category: "Home & Living",
    price: 55,
    rating: 4.2,
    stock: 100,
  },
  {
    id: "p-017",
    productName: "Digital Camera",
    category: "Photography",
    price: 950,
    rating: 4.7,
    stock: 15,
  },
  {
    id: "p-018",
    productName: "Yoga Mat Non-Slip",
    category: "Sports",
    price: 35,
    rating: 4.4,
    stock: 85,
  },
  {
    id: "p-019",
    productName: "Microwave Oven",
    category: "Kitchen Appliances",
    price: 400,
    rating: 4.6,
    stock: 28,
  },
  {
    id: "p-020",
    productName: "Bluetooth Speaker",
    category: "Electronics",
    price: 130,
    rating: 4.5,
    stock: 60,
    },
];

const sortProducts = products
.filter((items) => items.category === "Electronics")
.sort((a,b) => b.price - a.price )
.slice(0,3)
.map( (product) => {
    return { name : product.price}
})

console.log(sortProducts)