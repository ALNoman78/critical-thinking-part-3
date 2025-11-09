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
    { id: "p-111", title: "River of Dreams", author: "Ella Thompson" },
    { id: "p-112", title: "Beneath the Stars", author: "Michael Adams" },
    { id: "p-113", title: "Forgotten Kingdom", author: "Chloe Anderson" },
    { id: "p-114", title: "The Glass Empire", author: "Lucas Reed" },
    { id: "p-115", title: "Tides of Time", author: "Grace Morgan" },
    { id: "p-116", title: "Shadow Realm", author: "Ethan Walker" },
    { id: "p-117", title: "The Iron Crown", author: "Ava Richardson" },
    { id: "p-118", title: "The Last Voyage", author: "Oliver Harris" },
    { id: "p-119", title: "Broken Promises", author: "Isabella Scott" },
    { id: "p-120", title: "Under the Willow", author: "Mason Taylor" },
    { id: "p-121", title: "The Eternal Flame", author: "Sophie Davis" },
    { id: "p-122", title: "Path of Shadows", author: "Liam Wright" },
    { id: "p-123", title: "City of Whispers", author: "Harper Lee" },
    { id: "p-124", title: "The Frozen Lake", author: "Amelia King" },
    { id: "p-125", title: "Stormfall", author: "Nathan Brooks" },
    { id: "p-126", title: "Echo Valley", author: "Luna Mitchell" },
    { id: "p-127", title: "The Fire Within", author: "Jacob Morris" },
    { id: "p-128", title: "Dust and Dreams", author: "Avery Turner" },
    { id: "p-129", title: "Garden of Secrets", author: "Scarlett Hayes" },
    { id: "p-130", title: "A World Reborn", author: "Evelyn Collins" },
];


const lookupTable = books.reduce((table, data) => {
    table[data.id] = data

    // console.log(table);
    return table
}, {})


const post = lookupTable["p-104"]

console.log(post)


// ! following task here

for(let postData in lookupTable){
    console.log(lookupTable[postData])
}