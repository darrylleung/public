const fs = require("fs");
let { readdir, stat } = require("fs");
const { promisify } = require("util");

readdir = promisify(readdir);
stat = promisify(stat);

logSizes(`${__dirname}/files`).then(() => console.log("done!"));

function logSizes(path) {
    return readdir(path, {
        withFileTypes: true,
    }).then((items) => {
        const promises = [];
        items.forEach((item) => {
            let nextPath = `${path}/${item.name}`;
            if (item.isFile()) {
                promises.push(
                    stat(nextPath).then((stats) => {
                        console.log(`${nextPath}: ${stats.size}`);
                    })
                );
            } else {
                promises.push(logSizes(nextPath));
            }
        });
        return Promise.all(promises);
    });
}

try {
    const obj = mapSizes(`${__dirname}/files`);
    // pass obj to JSON.stringify and pass the result to writeFileSync
    fs.writeFileSync("files.json", JSON.stringify(obj, null, 4));
} catch (err) {
    console.log("ERROR: ", err);
}

function mapSizes(path) {
    const folderObj = {};
    const items = fs.readdirSync(path, {
        withFileTypes: true,
    });
    items.forEach(function (item) {
        // add a property to the object for each item
        let itemName = `${item.name}`;
        let pathName = `${path}/${item.name}`;
        const stats = fs.statSync(pathName);
        if (item.isFile()) {
            // add a property to the folderObj whose value is the size you get from calling statSync
            folderObj[itemName] = stats.size;
            // console.log(folderObj);
        } else {
            // add a property to the folderObj whose value is the object you get from calling mapSizes again
            folderObj[itemName] = mapSizes(pathName);
            // console.log(folderObj);
        }
    });
    return folderObj;
}
