// ! Look up table

const books = [
    { id: "p-101", title: "The Silent Ocean", author: "Emily Carter" },
    { id: "p-102", title: "Beyond the Horizon", author: "James Holden" },
    { id: "p-103", title: "Echoes of Eternity", author: "Sophia Lee" },
    { id: "p-104", title: "Midnight Sun", author: "Daniel Clark" },
    { id: "p-105", title: "The Hidden Truth", author: "Ava Mitchell" },
    { id: "p-106", title: "Winds of Winter", author: "George R. R. Martin" },
    { id: "p-107", title: "Falling Skies", author: "Harper Collins" },
    { id: "p-108", title: "Crimson Moon", author: "Liam Brooks" },
    { id: "p-109", title: "Whispers in the Dark", author: "Olivia Parker" },
    { id: "p-110", title: "The Lost City", author: "Noah Bennett" },
];

const lookUpTable = books.reduce(( table, post ) => {
    table[post.id] = post

    return table
}, {})

console.log(lookUpTable)


//! const post = books.find((post) => post.id === "p-107" ) // worst case

const post = lookUpTable["p-105"]

console.log(post);