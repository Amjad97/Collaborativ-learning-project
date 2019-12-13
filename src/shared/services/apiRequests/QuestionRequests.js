/**
 * All questions service API requests.
 */
const QuestionRequests = (requestInstance, baseUrl) => ({
    getQuestions: (categoryId) => requestInstance.get(`${baseUrl}/`),
    addQuestion: (categoryId, questionData) => requestInstance.post(`${baseUrl}/`)
});

export default QuestionRequests;
