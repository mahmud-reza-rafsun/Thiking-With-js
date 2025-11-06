// const createCounter = () => {
//     let count = 0;

//     return (ammount) => {
//         count = count + ammount;
//         return count;
//     }
// }

// const counter = createCounter();
// console.log(counter(3));
// console.log(counter(6));


class Couter {
    constructor(count) {
        this.count = count;
    }

    add(amount) {
        this.count = this.count + amount;
    }

    print() {
        console.log(this.count);
    }
}

const counter1 = new Couter(0);

counter1.add(3)
counter1.add(2)

counter1.print();

const counter2 = new Couter(10);

counter2.add(5);
counter2.add(10);

counter2.print();