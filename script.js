class Bank {
  constructor(balance) {
    this.balance = balance;
  }
  withdraw(amount) {
    if (this.balance - amount <= 0) {
      console.log("You can not withdraw more than what you have!");
      console.log({ balance: this.balance });
      return;
    }
    this.balance -= amount;
    console.log("withdraw", `$${amount}`);
    console.log({ balance: this.balance });
  }
  deposit(amount) {
    this.balance += amount;
    console.log("deposited", `$${amount}`);
    console.log({ balance: this.balance });
  }
}
const userChecking = new Bank(0);
console.log(userChecking.balance);

const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const amountInput = document.getElementById("amount");
const balanceDiv = document.getElementById("balance");

depositButton.onclick = () => {
  const amount = Number(amountInput.value);
  userChecking.deposit(Number(amountInput.value));
  balanceDiv.innerText = `Balance: ${userChecking.balance}`;
};
withdrawButton.onclick = () => {
  const amount = Number(amountInput.value);
  userChecking.withdraw(amount);
  balanceDiv.innerText = `Balance: ${userChecking.balance}`;
};
