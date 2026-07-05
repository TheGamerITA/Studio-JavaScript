//Create an object called player with the following 
//properties: name, level, coins, and premium. 
//Assign appropriate values to each property. 
//Then, print the player's name and coins to the console. 
//Next, update the player's coins by subtracting 200 from the current value 
//and print the updated coins to the console. 
//Finally, add a new property called weapon to the player object and assign it a 
//value of "Sword". Print the player's weapon to the console.
let player = {
    name: "Lorenzo",
    level: 18,
    coins: 500,
    premium: true
};

console.log(player.name);
console.log(player.coins);
player.coins = 500 - 200;
console.log(player.coins);
player.weapon = "Sword";
console.log(player.weapon);