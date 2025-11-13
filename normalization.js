// console.log("Normalization file added to the repos")

const users = [
    { id: 101, name: "Noman" },
    { id: 102, name: "Maisa" },
    { id: 104, name: "Mim" },
    { id: 105, name: "Rakib" },
    { id: 106, name: "Tania" },
    { id: 110, name: "Mohua" }
];

const posts = [
    { id: 1, userID: "101", title: "Frontend Developer" },
    { id: 2, userID: "102", title: "Backend Developer" },
    { id: 3, userID: "110", title: "Full Stack Engineer" },
    { id: 4, userID: "104", title: "UI/UX Designer" },
    { id: 5, userID: "102", title: "Project Manager" },
    { id: 6, userID: "106", title: "Software Tester" },
    { id: 7, userID: "110", title: "DevOps Engineer" },
    { id: 8, userID: "102", title: "Database Administrator" },
    { id: 9, userID: "105", title: "Data Analyst" },
    { id: 10, userID: "110", title: "Product Owner" }
];

// todo create hash table of post

// !! how to create a look up table


// ? order of N => O(n)
const postByUser = posts.reduce((table, post) => {
    const { userID } = post

    if (!table[userID]) {
        table[userID] = []
    }

    table[userID].push(post)
    return table;
}, {})


// ? order of one => O(n)
const userWithPost = users.map((user) => {
    return {
        ...user,

        posts: postByUser[user.id] || [],
    }
})

console.log(JSON.stringify(userWithPost))