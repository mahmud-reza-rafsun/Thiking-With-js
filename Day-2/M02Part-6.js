const books = [
  { id: 1, title: "JavaScript Basics", author: "John Doe" },
  { id: 2, title: "React Guide", author: "Sarah Smith" },
  { id: 3, title: "Node.js Handbook", author: "Mike Johnson" },
  { id: 4, title: "Data Structures", author: "Alan Turing" },
  { id: 5, title: "Clean Code", author: "Robert C. Martin" }
];


const lookupTable = books.reduce((table, post) => {
  table[post.id] = post;
  return table;
}, {})

console.log(lookupTable);

// const findOneBooks = books.find((book) => book.id === 5);
// const findBook = lookupTable[2]
// console.log(findBook);

for(let post in lookupTable){
  console.log(lookupTable[post]);
}