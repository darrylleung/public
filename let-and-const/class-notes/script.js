const teacher = {
    first: "Marcell",
    last: "Prét",
};

let newObj = { ...teacher, first: "Luisa" };
console.log("newObj: ", newObj);


const { name, country, population } =