// Write a constructor called Rectangle that accepts two numbers (width and height) as
// parameters. Rectangle instances should have a method called getArea that returns the
// instance's width multiplied by its height. Write another constructor called Square
// that accepts one number (which will serve as both width and the height) as a parameter.
// Instances of Square should also have a getArea method but you should not rewrite the
// getArea function you wrote for Rectangle. Square instances should use the same getArea
// method that Rectangle instances do.

//  var square = new Square(4);
//  square.getArea(); //16

//  var rect = new Rectangle(4, 5);
//  rect.getArea(); //20

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

function Square(n) {
    this.width = n;
    this.height = n;
}

Square.prototype = Object.create(Rectangle.prototype);

var rect = new Rectangle(4, 5);
var square = new Square(4);

console.log(Square.constructor == Rectangle.constructor);
console.log(square.getArea()); //20

//this is in the code and avoids being repeated
// return this.width * this.height;
