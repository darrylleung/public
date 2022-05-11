const express = require("express");
const teachers = require("./data.json");
const app = express();

app.locals.helpers = {
    stressImportance(str) {
        return str.toUpperCase();
    },
};

//setup for express-handlebars
const { engine } = require("express-handlebars");

//boilerplate to allow our express server to use
//handlebars-express as a templating engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("./projects")); // making sure that we are serving all our static project files

app.use((req, res, next) => {
    console.log(`Middleware says url is ${req.url}`);
    return next();
});

app.get("/", (req, res) => {
    res.render("home", {
        // layout: null,
        cohort: "Truffle",
        teachers,
        title: "HB Portfolio",
        btnText: "Click the home button",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        layout: "main",
        emojis: ["🌝", "👹", "👽"],
        title: "About",
        btnText: "Click the about button",
    });
});

//adding a dynamic route
app.get("/about/:demo", (req, res) => {
    console.log("req.params: ", req.params);
    res.send("<h1>DEMO</h1>");
});

app.listen(8080, console.log("listening on port 8080"));
