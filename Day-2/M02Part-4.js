// Sort

// const numbers = [40, 50, 30, 70, 1, 9, 20];
const fruits = ["Banana", "Apple", "Orange", "Cherry"];

fruits.sort((a, b) => a.localeCompare(b));

// console.log(fruits);

// Nested array flat

// const arr = [1, 4, 2, 7, [5, 7, [87, 98]]];
// const flatArr = arr.flat(Infinity);
// console.log(flatArr);

const tagsFormPost = [
    ["javascript", "react", "css"],
    ["node", "express"],
    ["css", "html", "react"]
];

const filterTags = [...new Set(tagsFormPost.flat())];
// console.log(filterTags);

// some

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const hasEvenNumbers = numbers.some(number => number % 2 === 0)
// console.log(hasEvenNumbers);

const currentUserRole = ["user", "editor", "admin"];
const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRole.some((role) => featureAccessRoles.includes(role));

// console.log(canAccess);


// Array.from

const arr = Array.from([1,2,3], (value, i) => value * value);

// console.log(arr);

const range = (start, stop, step) => Array.from({length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);
console.log(range(0, 11, 1));
