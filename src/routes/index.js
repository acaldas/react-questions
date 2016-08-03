import Express from "express"
import Question from "./QuestionRoutes"

const router = Express.Router();

router.use("/questions", Question);

export default router;