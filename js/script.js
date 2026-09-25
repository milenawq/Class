//1

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return this.firstName + " " + this.lastName;
    }

    set fullName(value){

        if (typeof value !== "string") {
            throw new Error("Повинен бути рядок");
        }
        const full = value.split(" ");

        this.firstName = full[0];
        this.lastName = full[1];
    }
}

const person1 = new Person("Milena", "Kuluda");
console.log(person1.fullName);

person1.fullName = "Nina Dobrev";
console.log(person1.fullName);
console.log(person1.firstName);
console.log(person1.lastName);

//2

class BankAccount {
    #balance = 0;

    constructor(amount) {
        if (amount < 0){
            throw new Error("Сума не повинна бути негативною")
        }

        this.#balance = amount;
    }

    deposit(amount) {
        if (amount <= 0){
            throw new Error("Сума повинна бути більша за нуль")
        }

        this.#balance += amount;
        return this.#balance 

    }

    withdraw(amount) {
        if (amount <= 0){
            throw new Error("Сума повинна бути більша за нуль")
        }

        if (this.#balance >= amount) {
            this.#balance -= amount;
            return this.#balance 
        }
        else {
            throw new Error("Баланс на карті менше за суму, що ви хочете зняти")
        }
    }

    getBalance(){
        return this.#balance;
    }

}

const bank =new BankAccount(1000);
console.log(bank.getBalance());
bank.deposit(300);
console.log(bank.getBalance());
bank.withdraw(1000);
console.log(bank.getBalance());
bank.withdraw(1000);
console.log(bank.getBalance());

//3

class User {
    static count = 0; 
    #id;

    constructor(name, age){
        if (typeof name !== "string") {
            throw new Error("Повинен бути рядок");
        }

        if (typeof age !== "number" || age <= 0) {
            throw new Error("Вік повинен бути числом та більше за нуль")
        }

        User.count++;

        this.#id = User.count;
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `Id: ${this.#id}, Ім'я: ${this.name}, Вік: ${this.age}`;
    }
}

const user1 = new User("Мілена", 19);
const user2 = new User("Андрій", 21);
const user3 = new User("Марія", 19);

console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(user3.getInfo());

console.log(User.count);

