const express = require("express");
const app = express();
const projects = require("./projects.json");
const { engine } = require("express-handlebars");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("./projects"));
app.use(express.static("./public"));

app.use((req, res, next) => {
    console.log("req.url: ", req.url);
    return next();
});

app.get("/", (req, res) => {
    res.render("welcome", {
        title: "Welcome Page",
        projects,
    });
});

app.get("/projects/:project", (req, res) => {
    const project = req.params.project;
    const selectedProject = projects.find((item) => item.directory == project);
    if (!selectedProject) {
        return res.sendStatus(404);
    }

    console.log(selectedProject);
    res.render("description", {
        title: "Project Descriptions",
        selectedProject,
        projects,
    });
});

app.listen(8080, console.log("listening on port 8080"));