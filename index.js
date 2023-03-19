const express = require('express');
const app = express();

app.use("/images", express.static(__dirname + "/public"))
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get("/api/v1/users/emVybw/profile", (req, res) => {
    res.sendFile(__dirname + "/me.html")
})

app.get("/api/v1/users/dHdv/profile", (req, res) => {
    res.sendFile(__dirname + "/alice.html")
})

app.get("/api/v1/users/b25l/profile", (req, res) => {
    res.sendFile(__dirname + "/bob.html")
})

app.get("/api/v1/users/dGhyZWU/profile", (req, res) => {
    res.sendFile(__dirname + "/mike.html")
})

app.listen(9999);