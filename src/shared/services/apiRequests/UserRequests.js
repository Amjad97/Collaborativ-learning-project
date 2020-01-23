const UserRequests = (requestInstance, baseUrl) => ({
  fetchMyData: () => requestInstance.get(`${baseUrl}/auth/me`),
  fetchUserData: userId =>
    requestInstance.get(`${baseUrl}/auth/user/${userId}`),
  updateMyData: userData =>
    requestInstance.post(`${baseUrl}/auth/update_profile/`, userData),
  getMyQuestions: () => requestInstance.get(`${baseUrl}/questions/my`),
  getMyAnswer: () => requestInstance.get(`${baseUrl}/questions/answer/my`),
  getMyResources: () => requestInstance.get(`${baseUrl}/resources/my`),
  getUserQuestions: userId =>
    requestInstance.get(`${baseUrl}/questions/user/${userId}`),
  getUserAnswer: userId =>
    requestInstance.get(`${baseUrl}/questions/answer/user/${userId}`),
  getUserResources: userId =>
    requestInstance.get(`${baseUrl}/resources/user/${userId}`),
  register: userData =>
    requestInstance.post(`${baseUrl}/auth/register/`, userData),
  login: ({ username, password }) =>
    requestInstance.post(`${baseUrl}/auth/login/`, {
      username,
      password
    })
});

export default UserRequests;
