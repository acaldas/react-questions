import React, { Component } from "react";
import "../styles/App.css";
import Question from "../models/Question";
import QuestionComponent from "./QuestionComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: Question.getQuestions(),
        };
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                <div className="questions">
                    {
                        this.state.questions.map(
                            (question, i) => <QuestionComponent key={i} question={question} />
                        )
                    }

                </div>

            </div>
        );
    }
}

export default App;
