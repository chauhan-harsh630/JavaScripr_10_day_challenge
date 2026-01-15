function bankaccunt() {
    let balance = 0;
    return {
        deposit(amount) {
            balance += amount;
            return "Deposited amount: " + amount;
        },

        withdraw(amount) {
            balance -= amount;
            return "Withdrawn amount: " + amount;
        },
        get balance() {
            return "Current balance: " + balance;
        }
    };
}

const c1 = bankaccunt();
console.log(c1.deposit(2000));
console.log(c1.withdraw(300));
console.log(c1.balance);