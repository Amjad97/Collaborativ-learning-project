const UserRequests = (requestInstance, baseUrl) => ({
  getUserData: userId => requestInstance.get(`${baseUrl}/auth/user/${userId}`),
  updateUserData: userData => requestInstance.patch(`${baseUrl}`),
  getUserQuestions: () => requestInstance.get(`${baseUrl}/questions/my`),
  getUserAnswer: () => requestInstance.get(`${baseUrl}/questions/answer/my`),
  getUserResources: () => requestInstance.get(`${baseUrl}/resources/my`),
  register: userData =>
    requestInstance.post(`${baseUrl}/auth/register`, userData),
  login: (email, password) =>
    requestInstance.post(`${baseUrl}/auth/login`, {
      email,
      password
    })
});

export default UserRequests;
