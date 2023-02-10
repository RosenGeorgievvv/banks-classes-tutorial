class Bank {
  constructor(balance) {
    this.balance = balance;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
  deposit(amount) {
    this.balance += amount;
  }
}
const userChecking = new Bank(100)