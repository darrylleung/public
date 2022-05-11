/* Write a function that expects a string representing a class name to be 
passed as a parameter. The function should return an array containing all 
the elements in the document that have the class that was passed in. */

function classFinder(param) {
    var elements = document.getElementsByClassName(param);
    var foundElements = Array.from(elements);

    return foundElements;
}

classFinder();
