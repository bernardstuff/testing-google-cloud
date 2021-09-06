const express = require('express');
const app = express();
const port = 5555;


app.get('/', (req,res) => {
    res.send('<title>Hello</title>');
});

app.listen(port, console.log(`http://0.0.0.0:${port}`));