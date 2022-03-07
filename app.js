const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public/"));

const fs = require("fs");

const header = fs.readFileSync("./public/components/header.html").toString();

const portal = fs.readFileSync("./public/pages/portal/portal.html").toString();
const mainpage = fs.readFileSync("./public/pages/main/main.html").toString();
const installNode = fs.readFileSync("./public/pages/main/install-node.html").toString();
const setup = fs.readFileSync("./public/pages/main/setup.html").toString();

app.get("/", (req,res) => {
    res.send(portal);
});

app.get("/intro", (req,res) => {
    res.send(header + mainpage);
});

app.get("/install-nodejs", (req,res) => {
    res.send(header + installNode);
});

app.get("/setup", (req,res) => {
    res.send(header + setup);
});
 








const PORT = process.env.PORT || 9090;


const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} `, server.address().port);
});