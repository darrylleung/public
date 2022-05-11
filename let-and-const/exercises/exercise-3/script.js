function logInfo(city) {
    const { name, country } = city;
    const { population: numPeople } = city;

    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
}

logInfo({ name: "Marseille", country: "France", population: 861635 });
