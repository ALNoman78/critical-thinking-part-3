const books = [
    { id: "p-101", title: "The Silent Ocean", author: "Emily Carter" },
    { id: "p-102", title: "Beyond the Horizon", author: "James Holden" },
    { id: "p-103", title: "Echoes of Eternity", author: "Sophia Lee" },
    { id: "p-104", title: "Midnight Sun", author: "Daniel Clark" }
];


const lookupTable = books.reduce((table, data) => {

    console.log(table, ": ", data)
    const { id } = data
    table[id] = data

    // console.log(table);
    return table
}, {})


const post = lookupTable["p-104"]

console.log(post)


// ! following task here

// for(let postData in lookupTable){
//     console.log(lookupTable[postData])
// }