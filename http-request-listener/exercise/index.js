const http = require("http");

http.createServer((req, res) => {
    // const { method, url, headers } = req;
    let body = [];
    console.log(req.method, req.url, req.headers);
    req.on("error", (err) => {
        console.log(err);
    })
        .on("data", (chunk) => {
            body += chunk;
        })
        .on("end", () => {
            console.log(body);
        });
    if (req.method == "GET") {
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        res.end(`<!doctype html>
            <html>
            <title>Hello World!</title>
            <p>Hello World!</p>
            </html>`);
    } else if (req.method == "HEAD") {
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        res.end();
    } else if (req.method == "POST") {
        res.setHeader("Location", "/");
        res.statusCode = 302;
        console.log(body);
        res.end();
    } else {
        res.statusCode = 405;
        res.end();
    }

    res.on("error", (err) => {
        console.log(err);
    });
}).listen(8080);
