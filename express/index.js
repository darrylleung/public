const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "admin" || creds.pass != "password") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use("/Spotify-Search", auth);

app.use(cookieParser());

app.use(function (req, res, next) {
    if (!req.cookies.accepted && req.url != "/cookie") {
        console.log(req.url);
        res.cookie("destination", req.url, {});
        res.redirect("/cookie");
    } else {
        return next();
    }
});

app.use(express.static(`./projects`));

app.use(function (req, res, next) {
    console.log(`Middleware says url is ${req.url}`);
    return next();
});

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.get("/cookie", function (req, res) {
    res.send(`
    <!doctype html>
    <title>Can I Have a Cookie?</title>
    <h2>Cookie Policy</h2>
    <p>User's must agree to accept cookies. Please check the box to continue.
    <form method="post">
        <input name="checker" type="checkbox">
        <button>Submit</button>
        </form>
    `);
});

app.post("/cookie", function (req, res) {
    // res.sendStatus(200);
    let checkedValue = req.body.checker;
    if (checkedValue) {
        res.cookie("accepted", "i'm in", {});
        res.redirect(req.cookies.destination);
        console.log("checked: ", req.body.checker);
    } else {
        res.send(`
        <!doctype html>
        <title>No Cookies</title>
        <h2>Please accept cookies to continue</h2>
        <button onclick="location.href='/cookie'">Go Back</button>
        `);
    }
});

app.listen(8080, () => console.log("I'm listening"));
