import { apiRequests } from "../../../../services/apiRequests";

const AnswersService = {
  // get answers for a specific question
  getAnswers: questionId =>
    apiRequests.AnswerApiRequests.getAnswers(questionId),
  // add answer
  addAnswer: (questionId, answerData) =>
    apiRequests.AnswerApiRequests.addAnswer(questionId, answerData)
};
export default AnswersService;
