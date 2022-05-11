let msg = "yay node";
console.log(msg);

const exportsFromScriptJs = require("./script");

require("./script");
require("./script");
require("./script");

console.log(exportsFromScriptJs);

exportsFromScriptJs.log();
exportsFromScriptJs.log();
exportsFromScriptJs.log();

console.log(module.exports == exports);

const handlebars = require("handlebars");
const tmpl = handlebars.compile("Hello, {{name}}");
console.log(
    tmpl({
        name: "Kitty",
    })
);

const url = require("url");
const qs = require("querystring");

// console.log(
//     url.parse("https://spiced.space/truffle/node?q=madonna&type=artist")
// );

console.log(process.argv);

if (process.argv[2] == "funky") {
    console.log("FUNKY!!!");
} else {
    console.log("Boooooo");
}
