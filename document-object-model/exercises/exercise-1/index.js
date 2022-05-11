/* Write a function that expects a string representing a selector to be 
passed as a parameter. The function should find all the elements in the 
document that match the selector and change their style so that the text 
they contain is italic, underlined, and bold. */

var a = document.getElementsByTagName("p");

for (var i = 0; i < a.length; i++) {
    a[i].style.fontStyle = "italic";
    a[i].style.fontWeight = "bold";
    a[i].style.textDecoration = "underline";
}
