// let getNameAndCountry = ({ name, country }) => [name, country];

// let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
//     let [, country] = getNameAndCountry(city2);
//     return {
//         ...city1,
//         country,
//     };
// };

var getNameAndCountry = function (obj) {
    return [obj.name, obj.country];
};

var getRelocatedCity = function (city1, city2) {
    if (typeof city2 == "undefined") {
        city2 = {
            country: "Germany",
        };
    }

    var country = getNameAndCountry(city2)[1];

    var returnedObj = {};

    for (var props in city1) {
        var newProps = city1[props];
        returnedObj[newProps] = props;
    }

    returnedObj.country = country;

    return returnedObj;
};

// loop through our city1 obj, add all properties and values from city1 to new returned obj
// add country property to returned obj with var "country" as its value
// return returnedObj
