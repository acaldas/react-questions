import React, { Component, PropTypes } from "react";
import "../styles/question.css";

class QuestionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "open",
        };
    }

    classes() {
        return "question " + this.state.status;
    }

    selectAnswer(answer) {
        const correct = this.props.question.selectAnswer(answer);
        const correctS = correct ? "correct" : "wrong";
        this.setState({
            status: "closed " + correctS
        });
    }

    render() {
        return (
            <div className={this.classes()}>
                <h3 className="question-text" onClick={() => this.props.onClick(this.id)}>{this.props.question.text}</h3>
                <ol className="question-answers">
                    {
                        this.props.question.answers.map(
                            (answer, i) =>
                                <li className="answer"
                                    key={i}
                                    onClick={() => this.selectAnswer(answer)}>
                                        {answer.text}
                                </li>
                        )
                    }
                </ol>
            </div>
        );
    }
}

QuestionComponent.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default QuestionComponent;
