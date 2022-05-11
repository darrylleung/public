const http = require("http");
const qs = require("querystring");
const chalk = require("chalk");
let selectedColor;

const server = http.createServer((req, res) => {
    req.on("err", (err) => {
        res.statusCode = 404;
        console.log("Error in request", err);
    });
    res.on("err", (err) => {
        res.statusCode = 404;
        console.log("Error in response", err);
    });

    if (req.method == "GET") {
        res.statusCode = 200;
        res.setHeader("content-type", "text/html");
        res.write(`<!doctype html>
        <html>
        <title>Colors</title>
        <form method="POST">
        <input type="text" name="message" autocomplete="off">
        <select name="color" id="select">
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
        <option value="gray">gray</option>
        <option value="magenta">magenta</option>
        <option value="cyan">cyan</option>
        </select>
        <button type="submit">Go</button>
        </form>
        </html>`);
        res.end();
    }

    if (req.method == "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            res.statusCode = 200;
            res.setHeader("content-type", "text/html");
            let parsedBody = qs.parse(body);

            selectedColor = parsedBody.color;

            console.log(chalk[selectedColor](parsedBody.message));
            res.write(`<!doctype html>
            <html>
            <title>Colors</title>
            <h1><a href="/" style="color: ${selectedColor}">${parsedBody.message}</a></h1>
            </html>`);
            res.end();
        });
    }
});

server.listen(8080, () => console.log("Port 8080 is listening"));
