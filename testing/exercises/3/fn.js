module.exports = function fn(myVar) {
    if (typeof myVar === "string") {
        return myVar.split("").reverse().join("");
    } else if (Array.isArray(myVar)) {
        const newArray = [];
        for (let i = 0; i < myVar.length; i++) {
            let inversedNull = fn(myVar[i]);
            newArray.push(inversedNull);
        }
        return newArray;
    } else {
        return null;
    }
};
