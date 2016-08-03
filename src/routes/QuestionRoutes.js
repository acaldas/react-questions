import Express from "express"
import QuestionController from "../controllers/QuestionsController"

const router = Express.Router();
router.use("/", QuestionController.list);

export default router;