"use strict";
//===========================================
// Sample all to create an express server
//===========================================
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PORT = 8080;
const HOST = "0.0.0.0"; //localhost
const app = express();
app.get('/', (req, res) => {
    let message = `Response from the server: ${Date().toString()}`;
    res.send(message);
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log("You are now running docker from a container");
