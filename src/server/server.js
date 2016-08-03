import express from "express";
import config from "../config.json";
import Question from "../models/Question";
import Answer from "../models/Answer";

const app = express();
const port = process.env.PORT || 3100;

const allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", config.client);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
};

app.use(allowCrossDomain);

app.get("/", function (req, res) {
    res.send("Hello World!");
});

let q1 =   new Question(
    1,
    "Pergunta 1?",
    [
        new Answer(1, "Resposta 1", true, 1),
        new Answer(2, "Resposta 2", false, 1),
        new Answer(3, "Resposta 3", false, 1),
        new Answer(4, "Resposta 4", false, 1)
    ]
);

let q2 = new Question(
    2,
    "Pergunta 2?",
    [
        new Answer(5, "Resposta 1", true, 2),
        new Answer(6, "Resposta 2", true, 2),
        new Answer(7, "Resposta 3", false, 2),
        new Answer(8, "Resposta 4", false, 2)
    ]
);

const questions = [q1, q2];

app.get("/questions", function (req, res) {
    res.send(questions);
});

app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
});
