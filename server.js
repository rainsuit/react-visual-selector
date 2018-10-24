// LazyLogging
const log = console.log;
// Modules
const path = require('path');
const express = require('express');
const app     = express();
const PORT    = 1234;
const server  = app.listen(PORT, () => log("Listening on", PORT));


app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+ '/main.html'));
})