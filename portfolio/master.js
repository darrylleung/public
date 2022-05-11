const cluster = require("cluster");
const os = require("os");

cluster.setupPrimary({
    exec: "server.js",
});

for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
}

cluster.on("exit", (worker) => {
    console.log("Worker has gone on to the Great Beyond", worker.process.pid);
    cluster.fork();
});
