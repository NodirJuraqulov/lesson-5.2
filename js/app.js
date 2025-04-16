import { product1, product2, time1, time2, flight1, flight2, point1, point2, cola, moxito, post1, post2, card1, card2, student1, student2 } from "./main.js";


// 1-masala:
console.log(product1.getTotalPrice());
console.log(product2.getTotalPrice());


// 2-masala:
console.log(time1.start());
console.log(time2.start());


// 3-masala:
console.log(flight1.getInfo());
console.log(flight2.getInfo());


// 4-masala:
console.log(point1.getDistance());
console.log(point2.getDistance());


// 5-masala:
console.log(cola.addProduct("Fanta"));
console.log(cola.getTotal(15000));
console.log(moxito.addProduct("Flash"));
console.log(moxito.getTotal(10000));


// 6-masala:
console.log(post1.like());
console.log(post2.like());


// 7-masala:
console.log(card1.withdraw(700));
console.log(card2.withdraw(700));


// 8-masala:
console.log(student1.getAverage());
console.log(student1.isPassed());
console.log(student2.getAverage());
console.log(student2.isPassed());










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