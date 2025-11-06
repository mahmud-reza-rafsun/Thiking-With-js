const firstArray = [];
const secodArray = [];

for (let i = 0; i < 600000; i++) {
    if (i < 300000) {
        firstArray.push(i);
    }

    secodArray.push(i);
}

console.log("first array", firstArray);
console.log("second array", secodArray);


const firstUserList = firstArray.map(number => ({ userId: number }));

const secondUserList = secodArray.map(number => ({ userId: number }));

console.time("find");
// const user = secondUserList.find((user) => user.userId === 500000);
const user = secodArray[5000];
console.timeEnd("find")