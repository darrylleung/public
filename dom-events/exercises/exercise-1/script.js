// Make a page that has on it an element that is 100px by 100px in size,
// has absolute positioning, and has a solid background color. Add an event
// handler that makes this box center itself directly under the user's
// mouse pointer as it is moved across the screen.

let box = document.getElementById("box");

document.addEventListener("mousemove", function (e) {
    box.style.left = e.pageX - 50 + "px";
    box.style.top = e.pageY - 50 + "px";
});
