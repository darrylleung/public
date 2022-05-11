//Replace/rewerite a property in an array
//frenchPresidents[1] = "Francois Hollande";

//Add to an existing array if you know the length
//frenchPresidents[3] = 'Melanchon'

//Push - to add an element to end of an array
//frenchPresidents.push("")

//Pop - Remove an element at an end of an array
//frenchPresidents.pop()

//Unshift - Add an element to the beginning of an array
//frenchPresidents.unshift("")

//Splice - Remove an element in the middle of an array
//frenchPresidents.splice(starting position, number of elements to remove, option to add new element(s))

//methods that add elements will return the length of the array
//methods that remove elements will return the removed element

//Map - manipulate elements in an array with a function, creates a new array
//frenchPresidents.map(function(){})

//Filter - will be needed for exercise

//Array.from("") - creates a new Array using the characters of an element
var frenchPresidents = ["Sarkozy", "Hollande", "Macron"];

//Arrays with the same contents will not return as equal or strictly equal when compared
//console.log([1, 2, 3] === [1, 2, 3]); -> false

//Objects are lists of properties (characteristics), can be structured as Key:Value pairs

//Delete - delete flat.price - remove a property in an object

//In - operator that checks if a property is in an object, less specific, will also check parent properties - console.log("location" in flat)

//hasOwnProperty - checks if a property is in an object, ONLY checks the object and not parents, more specific

//toString - can add custom string to an object, to be used when an object is stringified - console.log("Flat of my dreams is: " + flat);

var flat = {
    area: 298,
    location: "Kreuzberg",
    terrace: true,
    price: 3000000,
    toString: function () {
        return flat.location + " | " + flat.area + " | " + flat.price;
    },
};

var duplicateParisFlat = Object.create(flat);

console.log("Flat of my dreams is: " + flat);

function each(entity) {
    //entity can be an object or an array
}

for (var i = 0; i < presidents.lengh; i++) {}

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

//exercise 2
var originalArray = [1, 2, 3];

function reverse(array) {
    return; // reversedArray (without changing the original one)
}

var reversedArray = reverse(originalArray);

console.log(originalArray); // [1, 2, 3]
console.log(reversedArray); // [3, 2, 1]

//exercise 3

function getLessThanZero(array) {
    return; // filtered array
}
