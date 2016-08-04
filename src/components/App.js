import React, { Component, PropTypes } from "react";
import "../styles/App.css";
import { connect } from "react-redux";
import QuestionComponent from "./QuestionComponent";
import {toggleQuestion} from "../actions/index";
import Question from "../models/Question";

const App = ({ questions, onQuestionClick }) => (
    <div className="App">
        <div className="App-header">
            <h2>Welcome to React</h2>
        </div>
        <div className="questions">
            {
                questions.map((question, i) =>
                    <QuestionComponent key={i} question={question} onClick={() => onQuestionClick(question.id)} />
                )
            }
        </div>
    </div>
);

var questionPropType = function (props, propName, component) {
    var object = props[propName];
    if(!Question.prototype.isPrototypeOf(object)){
        return new Error('Invalid question!');
    }
};

App.propTypes = {
    questions: PropTypes.arrayOf(questionPropType).isRequired,
    onQuestionClick: PropTypes.func.isRequired
};

const getVisibleQuestions = (questions = []) => {
    return questions.filter(q => !q.hidden);
};

const mapStateToProps = (state) => {
    return {
        questions: getVisibleQuestions(state.questions)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onQuestionClick: (id) => {
            dispatch(toggleQuestion(id));
        }
    }
};

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default ConnectedApp;
