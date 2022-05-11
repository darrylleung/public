const url = require("url");
const qs = require("querystring");

const terminalUrl = process.argv[2];

// console.log(terminalUrl);

// console.log(url.parse(terminalUrl));
console.log("The protocol is " + url.parse(terminalUrl).protocol);
console.log("The host is " + url.parse(terminalUrl).host);
console.log("The hostname is " + url.parse(terminalUrl).hostname);
console.log("The port is " + url.parse(terminalUrl).port);
console.log("The pathname is " + url.parse(terminalUrl).pathname);
console.log("The query is " + url.parse(terminalUrl).query);

if (url.parse(terminalUrl).query) {
    const queryArgs = qs.parse(url.parse(terminalUrl).query);
    for (prop in queryArgs) {
        console.log(
            "The value of the " + prop + " parameter is " + queryArgs[prop]
        );
    }
}
