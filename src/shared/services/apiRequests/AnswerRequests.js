/**
 * All answers service API requests.
 */
const AnswerRequests = (requestInstance, baseUrl) => ({
  getAnswers: questionId => requestInstance.get(`${baseUrl}`),
  addAnswer: (questionId, answerData) => requestInstance.post(`${baseUrl}`)
});

export default AnswerRequests;
