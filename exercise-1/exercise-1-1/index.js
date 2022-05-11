function logType(variable) {
    if (variable === undefined) {
        console.log("undefined!");
    } else if (variable === null) {
        console.log("null!");
    } else if (Array.isArray(variable)) {
        console.log("array!");
    } else if (typeof variable === "number" && variable != "boolean") {
        console.log("number!");
    } else if (typeof variable == "number" && isNaN(variable) === true) {
        console.log("not a number!");
    } else if (typeof variable === "string") {
        console.log("string!");
    } else if (typeof variable === "object") {
        console.log("object!");
    } else if (typeof variable === "bigint") {
        console.log("bigint!");
    } else if (typeof variable === "function") {
        console.log("function!");
    } else if (typeof variable === "boolean") {
        console.log("boolean!");
    } else {
        console.log("I have no idea!");
    }
}

logType();

// console.log([]);
