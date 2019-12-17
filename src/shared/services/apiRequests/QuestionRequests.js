/**
 * All questions service API requests.
 */
const QuestionRequests = (requestInstance, baseUrl) => ({
  getQuestions: categoryId =>
    requestInstance.get(`${baseUrl}/questions/category/${categoryId}`),
  getQuestion: questionId =>
    requestInstance.get(`${baseUrl}/questions/${questionId}`),
  addQuestion: questionData =>
    requestInstance.post(`${baseUrl}/questions`, questionData)
});

export default QuestionRequests;
