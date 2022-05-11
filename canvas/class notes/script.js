(function () {
    var canvas = document.getElementById("canvas");
    console.log("canvas: ", canvas);
    //hey browser! i'm going to be drawing a 2D image
    var c = canvas.getContext("2d");

    //rectangle
    c.beginPath();
    c.fillStyle = "purple";
    //c.fillRect(x, y, width, height) - can use canvas.width/canvas.height for more dynamic sizing
    c.fillRect(0, 0, canvas.width, canvas.height);

    //triangle

    c.strokeStyle = "black"; //color of stroke
    c.lineWidth = 4; //width of line
    c.beginPath(); //method that initializes the canvas
    c.moveTo(250, 125); //starting point
    c.lineTo(125, 375);
    c.lineTo(375, 375);
    c.closePath();
    c.stroke();
    c.fillStyle = "cyan"; //color of fill
    c.fill(); //method that fills

    //big circle

    c.strokeStyle = "black";
    c.lineWidth = 2;
    c.beginPath();
    // c.arc(x, y, radius, start angle, end angle)
    c.arc(250, 299, 77, 0, Math.PI * 2);
    c.stroke();
    c.fillStyle = "teal";
    c.fill();

    //small circle

    c.strokeStyle = "black";
    c.lineWidth = 2;
    c.beginPath();
    c.arc(250, 191, 29, 0, Math.PI * 2);
    c.stroke();
    c.fillStyle = "magenta";
    c.fill();
})();
