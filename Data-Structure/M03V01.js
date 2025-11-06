// Sateless vs Statefull

// const counter = (ammout) => {
//     let count = 0;

//     count = count + ammout;

//     return count;
// }

// console.log(counter(3));
// console.log(counter(2));

const counter = {
    count: 0,
    
    add(ammout){
        this.count = this.count + ammout
    },

    print(){
        console.log(this.count);
    }
}

counter.add(3);
counter.add(5);

counter.print();
