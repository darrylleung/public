const http = require("http");

const server = http.createServer(function (request, response) {
    console.log(
        "request received!",
        request.method,
        request.url
        // request.headers
    );
    response.on('error', function (err) {
        console.log(err);
    });
    request.on('error', function (err) {
        console.log(err);
    });
    if (request.method == "GET") {
        response.statusCode = 200;
        response.setHeader("content-type", "text/html");
        // response.write(
        //     `<!doctype html>
        //     <title>my first page!</title>
        //     <h1>Hello, World!</h1>`
        // );
        response.end(`<!doctype html>
            <title>my first page!</title>
            <h1>Hello, World!</h1>
            <form method="POST">
            <textarea name="text"></textarea>
            <input name="password" value="trustno1">
            <button>submit</button>
            </form>`);
        //     if (request.url == '/funky/chicken') {

        //     } else if (request.url == '/disco/duck') {

        //     } else {

        //     }
    }

    if (request.method == "POST") {
        let body = "";
        request.on("data", function (chunk) {
            body += chunk;
        });
        request.on("end", function () {
            console.log(body);
        });
    }
});

server.listen(8080, () => console.log(`I'm listening.`));
