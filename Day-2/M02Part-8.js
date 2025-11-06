const sales = [
    { category: "Electronics", item: "Headphone", price: 1500, quantity: 2 },
    { category: "Grocery", item: "Rice", price: 60, quantity: 5 },
    { category: "Clothing", item: "T-Shirt", price: 450, quantity: 3 },
    { category: "Grocery", item: "Oil", price: 180, quantity: 2 },
    { category: "Clothing", item: "Jeans", price: 950, quantity: 1 },
    { category: "Electronics", item: "Keyboard", price: 900, quantity: 1 },
];

// TODO init the empty obj
// TODO init the obj category
// TODO calculate the revinue 

// const totalSalesByCategory = sales.reduce((table, sale) => {
//     const { category, price, quantity } = sale
//     if (!table[category]) {

//         table[category] = {
//             totalRevinue: 0,
//             itemCount: 0,
//         };
//     }

//     table[category].totalRevinue += price * quantity;
//     table[category].itemCount += quantity;

//     return table;
// }, {})

// console.log(totalSalesByCategory);


const totalSalesByCategory = sales.reduce((table, sale) => {
    const {category, price, quantity} = sale;
    if(!table[category]){
        table[category] = {
            totalRevinue: 0,
            itemCount: 0
        }
    }
    table[category].totalRevinue += price * quantity;
    table[category].itemCount += quantity;

    return table;
}, {});

console.log(totalSalesByCategory);