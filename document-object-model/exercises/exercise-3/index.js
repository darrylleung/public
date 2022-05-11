/* Write a function that inserts an element into the body of the currently 
loaded page. That element should have fixed position, z-index of 2147483647, 
left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'. */

function addElement() {
    var newDiv = document.createElement("div");

    newDiv.style.position = "fixed";
    newDiv.style.zIndex = 2147483647;
    newDiv.style.left = "20px";
    newDiv.style.top = "100px";
    newDiv.style.fontSize = "200px";

    var newContent = document.createTextNode("AWESOME");

    newDiv.appendChild(newContent);

    document.body.appendChild(newDiv);
}
