import Base from "./Base";
import Answer from "./Answer";

class Question extends Base {
    constructor(id, text, answers = []) {
        super(id);
        this.text = text;
        this.answers = answers;
    }

    selectAnswer(answer) {
        return answer.questionId === this.id && answer.correct;
    }

    static fromJSON(json) {
        return new Question(
            json.id,
            json.text,
            json.answers
        );
    }

    static getQuestions() {
        return [
            new Question(
                1,
                "Pergunta 1?",
                [
                    new Answer(1, "Resposta 1", true, 1),
                    new Answer(2, "Resposta 2", false, 1),
                    new Answer(3, "Resposta 3", false, 1),
                    new Answer(4, "Resposta 4", false, 1),
                ]
            ),
            new Question(
                2,
                "Pergunta 2?",
                [
                    new Answer(5, "Resposta 1", true, 2),
                    new Answer(6, "Resposta 2", true, 2),
                    new Answer(7, "Resposta 3", false, 2),
                    new Answer(8, "Resposta 4", false, 2),
                ]
            )
        ];
    }
}

export default Question;
