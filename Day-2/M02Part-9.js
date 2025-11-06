//  Denomalizing Data (Client-size join)

// ? Input
const users = [
    { id: 101, name: "Rafsun" },
    { id: 102, name: "Jahid" },
    { id: 103, name: "Sadia" }
];


const posts = [
    { id: 1, userID: 101, title: "Introduction to JS" },
    { id: 2, userID: 102, title: "React Basics" },
    { id: 3, userID: 103, title: "Node.js Guide" },
    { id: 4, userID: 101, title: "CSS Tricks" },
    { id: 5, userID: 102, title: "Frontend Tools" }
];

// TODO create a hashtable of posts

const postByUserId = posts.reduce((table, post) => {
    const { userID } = post;
    if(!table[userID]){
        table[userID] = [];
    }

    table[userID].push(post)

    return table;
}, {});


// O(n)
const userWithPosts = users.map((user) => {
    return {
        ...user,
        // O(1)
        posts: postByUserId[user.id] || [],
    }
});

console.log(JSON.stringify(userWithPosts));


// console.log(postByUserId);



// for (let post in hashTable) {
//     console.log(hashTable[post]);
// }