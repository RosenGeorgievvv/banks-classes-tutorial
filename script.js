class Bank {
  constructor(balance) {
    this.balance = balance;
  }
  withdraw(amount) {
    if(this.balance - amount <= 0){
        console.log('You can not withdraw more than what you have!')
        console.log({balance: this.balance})
        return
    }
    this.balance -= amount;
    console.log('withdraw', `$${amount}`)
    console.log({balance: this.balance})
  }
  deposit(amount) {
    this.balance += amount;
    console.log('deposited', `$${amount}`)
    console.log({balance: this.balance})
  }
}
const userChecking = new Bank(200)
console.log(userChecking.balance) 

const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const amountInput = document.getElementById('amount')

depositButton.onclick = () => userChecking.deposit(Number(amountInput.value))
withdrawButton.onclick = () => userChecking.withdraw(Number(amountInput.value))