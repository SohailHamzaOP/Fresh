const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmi = parseFloat(weight / (height * height));

    res.send("<h1> Your BMI Calculation is " + bmi + "</h1>");
})






app.listen("3000", () => {
    console.log("The server is running on port 3000");
})