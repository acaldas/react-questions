import { FETCH_QUESTIONS, RECEIVE_QUESTIONS, ADD_QUESTION, TOGGLE_QUESTION } from "./actionTypes";
import Question from "../models/Question";

export const fetchQuestions = () => {
    return {
        type: FETCH_QUESTIONS
    }
};

export function receiveQuestions(json) {
    return {
        type: RECEIVE_QUESTIONS,
        questions: json.map(object => Question.fromJSON(object)),
        receivedAt: Date.now()
    }
}

export function getQuestions() {
    return function (dispatch) {
        dispatch(fetchQuestions());
        return fetch("api/questions")
            .then(response => response.json())
            .then(json =>  dispatch(receiveQuestions(json)))
    }
}

export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    };
};

export const toggleQuestion = (id) => {
    return {
        type: TOGGLE_QUESTION,
        id
    };
};
