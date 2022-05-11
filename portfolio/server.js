const http = require("http");
const path = require("path");
const fs = require("fs");

const homePage = require("./home-page");

const projectsDirectory = path.join(__dirname, "projects");

const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};

const server = http.createServer((req, res) => {
    console.log("REQUEST", req.url);
    req.on("error", (err) => console.log(err));
    res.on("error", (err) => console.log(err));

    if (req.method !== "GET") {
        res.statusCode = 405;
        return res.end();
    }

    if (req.url === "/") {
        res.statusCode = 200;
        const homePageHTML = homePage.generateHomePage(projectsDirectory);
        return res.end(homePageHTML);
    }

    const requestedEntity = path.join(projectsDirectory, req.url);

    if (!requestedEntity.startsWith(projectsDirectory)) {
        res.statusCode = 403;
        return res.end();
    }

    fs.stat(requestedEntity, (err, metaData) => {
        if (err) {
            res.statusCode = 404;
            return res.end();
        }

        if (metaData.isFile()) {
            const extension = path.extname(requestedEntity);

            res.setHeader("Content-Type", contentTypes[extension]);

            const readStream = fs.createReadStream(requestedEntity);
            readStream.on("Error", (err) => {
                console.log(err);
                res.statusCode = 500;
                return res.end();
            });

            readStream.pipe(res);
        } else {
            res.statusCode = 301;

            if (req.url.charAt(req.url.length - 1) !== "/") {
                let newUrl = req.url + "/";
                res.setHeader("Location", newUrl);
                return res.end();
            }

            res.setHeader("Location", req.url + "index.html");
            return res.end();
        }
    });
});

server.listen(8080, () => console.log("Listening on Port 8080"));
