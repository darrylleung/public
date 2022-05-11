const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

/*
res.send
res.json
res.sendFile
res.redirect
res.render
res.sendStatus
*/

app.use(cookieParser());

app.use(express.static(`./projects`));

// middleware
app.use(function (req, res, next) {
    console.log(`middleware says url is ${req.url}`);
    return next();
});

//body-parser
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use("/hello", function (req, res, next) {
    console.log("HELLO!");
    next();
});

// /:something colon followed by variable
app.get(`/hello/world`, function (req, res, next) {
    console.log(
        req.query,
        req.headers.cookie,
        req.cookies,
        req.cookies.duck,
        req.cookies.chicken
    );
    res.cookie("duck", "disco", {});
    res.cookie("chicken", "funky", {});
    res.send(
        `<!doctype html>
        <title>Yo World!</title>
        <p>Yo World!`
    );
});

app.get(`/hello/:something`, function (req, res, next) {
    console.log(req.url, req.params.something);
    res.sendStatus(200);
});

app.get("/cookie", function (req, res) {
    res.send(`
    <!doctype html>
    `);
});

app.get("/form/test", function (req, res) {
    res.send(
        `<!doctype html>
        <form>
        <input name="checker" type="checkbox">
        <button>submit</button>
        </form>`
    );
});

/*
    res.cookie('url', req.url);
*/

app.get("/redirect/spiced", function (req, res) {
    res.redirect("https://spiced.academy");
});

app.get("/redirect/helloworld", function (req, res) {
    res.redirect("/hello/world");
});

app.post("/form/test", function (req, res) {
    console.log(req.body);
    res.sendStatus(200);
});

// app.get(`/hello/world`, function (req, res, next) {
//     return next();
//     res.send(
//         `<!doctype html>
//         <title>Hello World!</title>
//         <p>Hello World!`
//     );
// });

app.post(`/funky/chicken.html`, function (req, res, next) {
    console.log(req.body);
    res.send(
        `<!doctype html>
        <title>Thanks!</title>
        <p>Thanks!`
    );
});

app.listen(8080, () => console.log("I'm listening"));
