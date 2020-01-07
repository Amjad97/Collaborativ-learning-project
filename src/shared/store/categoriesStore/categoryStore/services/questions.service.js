import { apiRequests } from "../../../../services/apiRequests";
const QuestionsService = {
  // get all questions
  getAllQuestions: () => apiRequests.QuestionApiRequests.getAllQuestions(),
  // get questions for specific category
  getQuestions: categoryId =>
    apiRequests.QuestionApiRequests.getQuestions(categoryId),
  // get question
  getQuestion: questionId =>
    apiRequests.QuestionApiRequests.getQuestion(questionId),
  // add question
  addQuestion: questionData =>
    apiRequests.QuestionApiRequests.addQuestion(questionData)
};
export default QuestionsService;
