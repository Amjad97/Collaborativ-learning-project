/**
 * All questions service API requests.
 */
const QuestionRequests = (requestInstance, baseUrl) => ({
  getAllQuestions: () => requestInstance.get(`${baseUrl}/questions`),
  getQuestions: categoryId =>
    requestInstance.get(`${baseUrl}/questions/category/${categoryId}`),
  getQuestion: questionId =>
    requestInstance.get(`${baseUrl}/questions/${questionId}`),
  addQuestion: questionData =>
    requestInstance.post(`${baseUrl}/questions/`, questionData)
});

export default QuestionRequests;
