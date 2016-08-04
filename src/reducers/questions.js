import { FETCH_QUESTIONS, RECEIVE_QUESTIONS, ADD_QUESTION, TOGGLE_QUESTION } from "../actions/actionTypes";

const question = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_QUESTION:
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                hidden: !state.hidden
            });
        default:
            return state
    }
};

const questions = (
    state = {
        isFetching: false,
        questions: []
    },
    action) => {
    switch (action.type) {
        case FETCH_QUESTIONS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_QUESTIONS:
            return Object.assign({}, state, {
                isFetching: false,
                questions: action.questions,
                lastUpdated: action.receivedAt
            });
        case ADD_QUESTION:
            return Object.assign({}, state, {
                questions: [
                    ...state.questions,
                    action.question
                ]
            });
        case TOGGLE_QUESTION:
            const questions = state.questions.map(t => question(t, action));
            return { questions: questions };
        default:
            return state
    }
};

export default questions;
