var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var propertyKey in a) {
    b[a[propertyKey]] = propertyKey;
    // var newPropertyKey = a[propertyKey]; // a[propertyKey] is propertyValue
    // var newPropertyValue = propertyKey;
    // b[newPropertyKey] = newPropertyValue;
}

console.log(b);
