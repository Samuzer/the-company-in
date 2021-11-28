require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/company", require("./routes/company"));
// app.use("/api/students", require("./routes/students"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
