const products = [
    { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
    { category: "Electronics", item: "Smartphone", price: 900, quantity: 2 },
    { category: "Home", item: "Microwave Oven", price: 300, quantity: 1 },
    { category: "Books", item: "Office Chair", price: 150, quantity: 3 },
    { category: "Books", item: "Leather Jacket", price: 200, quantity: 2 },
    { category: "Beauty", item: "Perfume", price: 100, quantity: 1 },
    { category: "Electronics", item: "Football", price: 50, quantity: 4 },
    { category: "Books", item: "JavaScript Guide", price: 40, quantity: 5 },
    { category: "Home", item: "RC Car", price: 80, quantity: 2 },
    { category: "Sports", item: "Olive Oil", price: 20, quantity: 6 },
];


// console.log(products)

// const data = products.reduce((table, items) => {

//     if (table[items.quantity]) {
//         table[items] = ++table[items.quantity]
//     } else {
//         table[items] = 1; //todo here initialize the value here
//     }

//     return table;
// }, {})

// console.log(data)


const salesTables = products.reduce((table, sale) => {

    console.log(table, ":", sale)
    const { category, price, quantity } = sale //! destructure object data here

    if (!table[category]) {
        //! here is the empty object initialize 
        table[category] = {  
            totalRevenue: 0,
            totalCost: 0,
        }
    }
    table[category].totalRevenue += price * quantity;
    table[category].totalCost += quantity;

    return table;
}, {}) //! also there is empty object
console.log(salesTables)


const reduce = products.reduce((table, item) => {
    const { category, price, quantity } = item

    if (!table[category]) {

        table[category] = {
            totalCost: 0,
            totalRevenue: 0,
        }
    }
    table[category].totalCost += price * quantity;
    table[category].totalRevenue += quantity;

    return table;
}, {})

console.log(reduce)