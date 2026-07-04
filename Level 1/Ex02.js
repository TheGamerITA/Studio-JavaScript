//if and else statement
let coins = 75;
let itemPrice = 50;
let coinsLeft;

if (coins >= itemPrice) {
    console.log("Item purchased");
    coinsLeft = coins - itemPrice;
    console.log(`Coins Left = ${coinsLeft}`);
} else {
    console.log("Not enough coins");
}