// //if you call a function with 'new' it will always return an object
// //unnecessary to include a return, it will be ignored unless it is an object

function Person(day) {
    this.hasRights = true;
    this.dob = day;
}

Person.prototype.sleep = function () {
    console.log("😴");
};

// function getPerson(day) {
//     return {
//         hasRights: true,
//         dob: day,
//     };
// }

// var p1 = new Person("1970-1-1");
// var p2 = new Person("2000-1-1");

// // console.log(p1, p2, p1 == p2);

// var leo = {
//     name: "Leonardo",
//     age: 47,
//     oscars: 1,
// };

// //Object.create() create a new object based on a prototype. The new object will inherit properties from its prototype
// //When a new object created from a prototype is logged, it only shows its new properties, not the inherited ones.

// var pen = Object.create(leo);
// pen.name = "Penélope";
// console.log(pen.name);
// delete pen.name;
// console.log(pen.name);
// console.log(pen.age, pen.hasOwnProperty("age"));

// function fn() {}

// // console.log(fn.prototype);
// // console.log(leo.hasRights);

// p1.sleep();
// p2.sleep();

// console.log(Object.getOwnPropertyNames(pen));

// for (var key in pen) {
//     console.log(key);
// }

// //Object.keys
// //Object.getOwnPropertyNames

function Actor(name, oscars) {
    this.oscars = oscars;
    Person.call(this, name);
}

// Actor.prototype.sleep = Person.prototype.sleep;

Actor.prototype = Object.create(Person.prototype);
Actor.prototype.constructor = Actor;

Actor.prototype.act = function () {
    console.log("To be or not to be. That is the question.");
};

var joe = new Person("Joe Schmo");
var pen = new Actor("Penélope Cruz");

pen.act();
pen.sleep();

console.log(pen instanceof Person);

console.log(pen.hasRights);
