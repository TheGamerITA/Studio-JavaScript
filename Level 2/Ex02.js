//return
function calculateRemainingCoins(coins, price) {
    return coins - price;
}

let remaining = calculateRemainingCoins(50, 20);
console.log(remaining);