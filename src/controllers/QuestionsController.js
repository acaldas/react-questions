import Question from "../models/Question";
import Express from "express";

function list(req, res, next) {
    //const { limit = 50, skip = 0 } = req.query;
    //Question.list({ limit, skip }).then((users) =>	res.json(users)).error((e) => next(e));
    res.json(Question.getQuestions());
}



export default { list };
