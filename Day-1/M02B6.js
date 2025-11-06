const arr = ["mango", "apple", "banana", "apple"];

// brut force

const removeDupArray = (arr) => {
    const newArr = [];
    arr.forEach(element => {
        if(!newArr.includes(element)){
            newArr.push(element);
        }
    });
    return newArr;
}

console.log(removeDupArray(arr));

// set inplementation

const removeDupSet = (arr) => {
    const set = new Set(arr);
    return Array.from(set);
}

console.log(removeDupArray(arr));