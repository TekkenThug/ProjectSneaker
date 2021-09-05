const express = require('express');
const app = express();
const PORT = 3000;

const routes = require('./router');

app.listen(PORT, () => {
    console.log('Hello, server is running!')
});

app.use(routes);

