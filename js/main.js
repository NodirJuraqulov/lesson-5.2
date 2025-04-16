


// HOMEWROK:

// 1-masala:

class ShopProduct {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalPrice(){
        return this.price * this.quantity;
    }
}

export const product1 = new ShopProduct("Lays", 15, 4);
export const product2 = new ShopProduct("Chers", 13, 2);




// 2-masala:

class Timer {
    constructor(seconds) {
        this.seconds = seconds;
    }
    start() {
        for (let i = 1; i <= this.seconds; i++) { 
            setTimeout(() => {
                console.log(`${i} sekunt o'tdi`);
            }, i * 1000);
        }
    }
}

export let time1 = new Timer(5);
export let time2 = new Timer(3);




// 3-masala:

class Flight {
    constructor(from, to, duration) {
        this.from = from;
        this.to = to;
        this.duration = duration;
    }
    getInfo(){
        return `${this.from} -> ${this.to} (${this.duration} soat)`;
    }
}    

export let flight1 = new Flight("Toshkent", "Istanbul", 5);
export let flight2 = new Flight("Toshkent", "Bukhara", 1);




// 4-masala:

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getDistance() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

export let point1 = new Point(3, 4);
export let point2 = new Point(13, 41);




// 5-masala:

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cart extends Product {
    constructor(name, price) {
        super(name, price);
    }
    addProduct(newProduct) {
        let productName = new Map();
        productName.set("name1", this.name);
        productName.set("name2", newProduct);
        let arrName = [productName.get("name1"), productName.get("name2")];
        return arrName;
    }
    getTotal(newPrice) {
        let totalPrice = new Map();
        totalPrice.set("price", this.price + newPrice);
        return totalPrice.get("price");
    }
}

export let cola = new Cart("Cola", 14000);
export let moxito = new Cart("Moxito", 12000);




// 6-masala:

class Post {
    constructor(title, content, likes) {
        this.title = title;
        this.content = content;
        this.likes = likes;
    }
    like() {
        return this.likes + 1;
    }
}

export let post1 = new Post("Football Plus", "Podcast", 1000);
export let post2 = new Post("Lolazor", "Podcast", 10);




// 7-masala:

class BankCard {
    constructor(owner, balance, limit) {
        this.owner = owner;
        this.balance = balance;
        this.limit = limit;
    }
    withdraw(amount) {
        return amount <= this.limit && amount <= this.balance
    }
} 

export let card1 = new BankCard("Nodir", 1000, 500);
export let card2 = new BankCard("Nodir", 1000, 5000);




// 8-masala:

class Grade {
    constructor(studentName, scores) {
        this.studentName = studentName;
        this.scores = scores;
    }
    getAverage() {
        return this.scores.reduce((n, m) => n + m, 0)/this.scores.length;
    }
    isPassed() {
        return this.scores.reduce((n, m) => n + m, 0)/this.scores.length > 60;
    }
}

export let student1 = new Grade("Laylo", [90,15,60,70,72,0,50,99]);
export let student2 = new Grade("Olim", [100,95,0,75,72,60,50,99]);










// console.log("hello");

export const square = (n) => {
    return n ** 2;
}

export const greeting = (str) => {
    return `Hello ${str}`;
}