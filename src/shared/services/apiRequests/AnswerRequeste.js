/**
 * All answers service API requests.
 */
const AnswerRequests = (requestInstance, baseUrl) => ({
  getAnswers: questionId => requestInstance.get(`${baseUrl}`)
});

export default AnswerRequests;
