import { apiRequests } from '../../../../services/apiRequests';

const QuestionsService = {
  // get questions for specific category
  getQuestions: (categoryId) => apiRequests.QuestionApiRequests
    .getQuestions(categoryId),
};
export default QuestionsService;
