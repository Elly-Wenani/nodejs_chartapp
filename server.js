const express = require("express");

const app = express();

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log('Running server on port ', PORT));