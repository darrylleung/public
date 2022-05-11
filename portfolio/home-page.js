const fs = require("fs");

function generateHomePage(path) {
    let homePageHtml = `<!DOCTYPE html>
        <html>
        <title>Darryl's Portfolio</title>
        <body>
        <h2>Projects</h2>
        <ul>`;

    let projects = fs.readdirSync(path, {
        withFileTypes: true,
    });
    projects.forEach((item) => {
        if (item.isDirectory()) {
            homePageHtml += `<li><a href="/${item.name}">${item.name}</a></li>`;
        }
    });

    homePageHtml += `</ul></body></html>`;

    return homePageHtml;
}

module.exports.generateHomePage = generateHomePage;
