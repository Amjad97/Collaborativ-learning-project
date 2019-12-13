import { apiRequests } from "../../../../services/apiRequests";
const QuestionsService = {
  // get questions for specific category
  getQuestions: categoryId =>
    apiRequests.QuestionApiRequests.getQuestions(categoryId),
  // add question
  addQuestion: (categoryId, questionData) =>
    apiRequests.QuestionApiRequests.addQuestion(categoryId, questionData)
};
export default QuestionsService;
