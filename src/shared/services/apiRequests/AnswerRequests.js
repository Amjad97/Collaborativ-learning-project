/**
 * All answers service API requests.
 */
const AnswerRequests = (requestInstance, baseUrl) => ({
  getAnswers: questionId =>
    requestInstance.get(`${baseUrl}/questions/question_answers/${questionId}`),
  addAnswer: answerData =>
    requestInstance.post(`${baseUrl}/question/answer`, answerData)
});

export default AnswerRequests;
