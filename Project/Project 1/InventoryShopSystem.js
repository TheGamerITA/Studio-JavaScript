let player = {
    name: "Lorenzo",
    coins: 100,
    inventory: ["Sword"]
};

function buyItem(itemName, price) {
    if (player.coins >= price){
        player.coins -= price;
        player.inventory.push(itemName);
        console.log(`${itemName} purchased`);
    } else {
        console.log(`Not enough coins to buy ${itemName}`);
    }
}

function displayInventory() {
    for (let i = 0; i < player.inventory.length; i++) {
        console.log(`Player inventory: ${player.inventory[i]}`);
    }
}

displayInventory();

buyItem("Shield", 40);
buyItem("Potion", 30);
buyItem("Armor", 50);

console.log(`coins remaining: ${player.coins}`);

displayInventory();