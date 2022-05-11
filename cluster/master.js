const cluster = require ("cluster");

cluster.setupMaster({
    exec: "server.js"
});