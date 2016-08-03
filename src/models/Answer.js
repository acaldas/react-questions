import Base from "./Base";
class Answer extends Base {
    constructor(id, text, correct = false, questionId = null) {
        super(id);
        this.text = text;
        this.correct = correct;
        this.questionId = questionId;
    }
}

export default Answer;
