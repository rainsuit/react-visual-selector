// LazyLogging
const log = console.log;
// Modules
const path = require('path');
const express = require('express');
const app     = express();
const server  = app.listen(1337, () => log("Listening on 1337"));


app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+ '/main.html'));
})