let bankAccount = {
    owner: "Lollo",
    balance: 1000,
    transactions: []
}

function deposit(amount) {
    bankAccount.balance += amount;
    bankAccount.transactions.push({ type: "deposit", amount: amount });
    console.log(`Deposited ${amount}. New balance: ${bankAccount.balance}`);
}

function withdraw(amount) {
    if (bankAccount.balance >= amount) {
        bankAccount.balance -= amount;
        bankAccount.transactions.push({ type: "withdrawal", amount: amount });
        console.log(`Withdrew ${amount}. New balance: ${bankAccount.balance}`);
    }else{
        console.log(`Insufficient funds. Current balance: ${bankAccount.balance}`);
    }
}

function displayTransactions() {
    for (let i = 0; i < bankAccount.transactions.length; i++) {
        const transaction = bankAccount.transactions[i];
        console.log(`Transaction: ${transaction.type}, Amount: ${transaction.amount}`)
    }
}

function displayBalance() {
    console.log(`Current balance: ${bankAccount.balance}`);
}

displayBalance()

deposit(200)

withdraw(150)

withdraw(800)

deposit(50)

displayBalance()

displayTransactions()