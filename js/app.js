console.log("HOMEWROK:");

console.log("1-masala:");

{

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

    let product1 = new ShopProduct("Lays", 15, 4);
    console.log(product1.getTotalPrice());

    let product2 = new ShopProduct("Chers", 13, 2);
    console.log(product2.getTotalPrice());

}




console.log("2-masala:");

{

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

    let time1 = new Timer(5);
    time1.start();

}




console.log("3-masala:");

{

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

    let flight1 = new Flight("Toshkent", "Istanbul", 5);
    console.log(flight1.getInfo());

    let flight2 = new Flight("Toshkent", "Bukhara", 1);
    console.log(flight2.getInfo());

}




console.log("4-masala:");

{

    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        getDistance() {
            return Math.sqrt(this.x ** 2 + this.y ** 2);
        }
    }

    let point1 = new Point(3, 4);
    console.log(point1.getDistance());

    let point2 = new Point(13, 41);
    console.log(point2.getDistance());

}




console.log("5-masala:");

{

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

    let product1 = new Cart("Cola", 14000);
    console.log(product1.addProduct("Fanta"));
    console.log(product1.getTotal(15000));

    let product2 = new Cart("Moxito", 12000);
    console.log(product2.addProduct("Fanta"));
    console.log(product2.getTotal(15000));

}




console.log("6-masala:");

{

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

    let post = new Post("Football Plus", "Podcast", 1000);
    console.log(post.like());

}




console.log("7-masala:");

{

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

    let card1 = new BankCard("Nodir", 1000, 500);
    console.log(card1.withdraw(700));

    let card2 = new BankCard("Nodir", 1000, 5000);
    console.log(card2.withdraw(700));

}




console.log("8-masala:");

{

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

    let student1 = new Grade("Laylo", [90,15,60,70,72,0,50,99]);
    console.log(student1.getAverage());
    console.log(student1.isPassed());

    let student2 = new Grade("Olim", [100,95,0,75,72,60,50,99]);
    console.log(student2.getAverage());
    console.log(student2.isPassed());

}










// import laylo, { str as text, age as yosh, add } from "./db.js";
// // import laylo from "./db.js";

// import { square, greeting } from "./main.js";

// console.log(text);
// console.log(yosh);
// console.log(laylo);
// console.log(add(5, 6));

// console.log(square(5));

// console.log(greeting("Laylo"));




// // Map and Set:

// // Map -- Object; Objectdan farqi bunda metodlari bor;
// {

//     let user = new Map();

//     user.set("name", "Laylo");
//     user.set("age", 19);

//     // user.delete("age");
//     // user.clear();
    
//     console.log(user);
//     console.log(user.get("name"));
//     console.log(user.size);

// }

// // Oddiy Object;
// {

//     let user = {};

//     user.name = "Nodir";
//     user.age = 23;

//     // delete user.age;

//     console.log(user);
//     console.log(user.name);
//     console.log(Object.keys(user).length);

// }


// // Map vs WeakMap:

// /*
// | Feature            | Map                                   | WeakMap                                |
// |--------------------|---------------------------------------|----------------------------------------|
// | Key Type           | Har qanday ma'lumot turidagi keylar   | Faqat obyektlar (objects)              |
// | Garbage Collection | Yo‘q (manual cleanup)                 | Ha (agar obyektlar to‘xtatilsa, avtomatik o‘chadi) |
// | Weak References    | Yo‘q                                   | Ha (only keys are weakly referenced)  |
// | Iteration          | Elementlar o‘rganilishi mumkin        | O‘rganish mumkin emas                  |
// | Size Method        | `size` metodidan foydalanish mumkin   | Yo‘q (bu metod mavjud emas)           |
// | Performance        | Ko‘proq resurs talab qiladi           | Kamroq resurs va xotira ishlatadi     |
// */




// // Set:

// {

//     let array = [1,2,3,1,4,6,2,5,6,3,1,4,5,2,"laylo","laylo",{a:5},{a:5}];  // ichida bir xil object kelganda o'chirmaydi!;
//     console.log(array);
    
//     let dublicate = new Set(array);
//     console.log(dublicate);
//     console.log(Array.from(dublicate));

// }

// class Animal {
//     constructor (lorem) {
//         this.lorem = lorem;
//     }
// }

// const cat = new Animal("Dog");
// console.log(cat);


// // Set vs WeakSet:

// /*
// | Feature              | Set                                      | WeakSet                                   |
// |----------------------|------------------------------------------|-------------------------------------------|
// | Element Type         | Har qanday ma'lumot turidagi elementlar  | Faqat obyektlar (objects)                 |
// | Garbage Collection   | Yo‘q (manual cleanup)                    | Ha (agar obyektlar to‘xtatilsa, avtomatik o‘chadi) |
// | Weak References      | Yo‘q                                      | Ha (only elements are weakly referenced) |
// | Iteration            | Elementlar o‘rganilishi mumkin           | O‘rganish mumkin emas                     |
// | Size Method          | `size` metodidan foydalanish mumkin      | Yo‘q (bu metod mavjud emas)              |
// | Performance          | Ko‘proq resurs talab qiladi              | Kamroq resurs va xotira ishlatadi        |
// */










// // Closure -- ota funksiya stackdan chiqib ketganda o'zgaruvchilarni o'zida saqlab turadi va ular ichidagi funksiyalarda ishlaydi;
// //         -- ichki funksiya tashqi funksiyani o'zgaruvchilaridan foydalana olishi;      

// function outer() {
//     let a = 5;
//     return function inner() {
//         // closure:
//         return a ** 2;
//     }
// }

// let outerResult = outer();
// let result = outerResult();
// console.log(result);