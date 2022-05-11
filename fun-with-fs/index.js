//synchronous version of readdir

const fs = require("fs");

// const  files = fs.readdirSync(`${__dirname}/files`, {
//     withFileTypes: true
// });

// console.log(files);

// files.forEach(item => {
//     console.log(item.name, item.isDirectory(), item.isFile())
// });

// fs.readdir(
//     `${__dirname}/files/funkychicken/`,
//     {
//         withFileTypes: true,
//     },
//     (err, files) => {
//         if (err) {
//             console.log("ERROR", err);
//         } else {
//              files.forEach(item => {
//              console.log(item.name, item.isDirectory(), item.isFile())
//              });
//         }
//     }
// );

// console.log("waiting for readdir to log the files");

// const stats = fs.statSync(__filename);

// console.log(stats);

// fs.stat(__filename, (err, stats) => {
//     if (err) {
//         console.log("ERROR", err);
//     } else {
//         console.log(stats, stats.isDirectory(), stats.isFile());
//     }
// });

// console.log("fs.stat is doing its thing");

logSizes(`${__dirname}/files`);

function logSizes(path) {
    fs.readdir(
        path,
        {
            withFileTypes: true,
        },
        function (err, items) {
            if (err) {
                console.log("Error", err);
                return;
            }
            items.forEach((item) => {
                let nextPath = `${path}/${item.name}`;
                if (item.isFile()) {
                    fs.stat(nextPath, (err, stats) => {
                        if (err) {
                            console.log("ERROR", err);
                        } else {
                            console.log(nextPath + ": " + stats.size);
                        }
                    });
                } else {
                    logSizes(nextPath);
                }
            });
        }
    );
}

// mapSizes(`${__dirname}/files`);

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

// let objFromNotes = {
//     "README.md": 12,
//     part1: {
//         a: {
//             images: {
//                 "cats.png": 573350,
//                 "kitty1_150x150.jpg": 9279,
//                 "kitty2_150x150.jpg": 14355,
//                 "kitty3_150x150.jpg": 13387,
//             },
//             "index.html": 241,
//             "stylesheet.css": 40,
//         },
//         b: {
//             images: {
//                 "boxes.png": 156804,
//             },
//             "index.html": 243,
//             "stylesheet.css": 39,
//         },
//     },
//     part2: {
//         "index.html": 160,
//         "script.js": 1998,
//     },
// };

// fs.writeFileSync("filemap.json", JSON.stringify(objFromNotes, null, 4));

// let items = [{ name: "readme.md" }, { name: "part1" }];
// const myObj = {};
// items.forEach(function (item) {
//     myObj[item.name] = "whatever";
// });

// console.log(myObj);
