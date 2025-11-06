

// Count Subtotal

const cartItems = [
  { id: "p-001", name: "Football Jersey", price: 1500, quantity: 1 },
  { id: "p-002", name: "Football Boot", price: 350, quantity: 2 },
  { id: "p-003", name: "Water Bottle", price: 2200, quantity: 1 }
];

const subtotal = cartItems.reduce((subtotal, product) => {
    // console.log(subtotal, product);
    return subtotal + (product.price * product.quantity);
}, 0)

// console.log(subtotal);
// footballer best score

const payers = [
  { name: "Jamal Bhuiyan", score: 2 },
  { name: "Topu Barman", score: 1 },
  { name: "Suman Reza", score: 0 },
  { name: "Rakib Hossain", score: 3 },
  { name: "Rahmat Mia", score: 1 }
];

const bestScorer = payers.reduce((bestPlayer, player) => {
    console.log(bestPlayer, player);
    if(bestPlayer.score > player.score){
        return bestPlayer;
    }

    return player;
    
}, payers[0])

console.log(bestScorer);