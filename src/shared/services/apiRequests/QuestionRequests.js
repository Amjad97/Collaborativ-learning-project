/**
 * All questions service API requests.
 */
const QuestionRequests = (requestInstance, baseUrl) => ({
    getQuestions: (categoryId) => requestInstance.get(`${baseUrl}/`)
});

export default QuestionRequests;
