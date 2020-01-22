const UserRequests = (requestInstance, baseUrl) => ({
  fetchMyData: () => requestInstance.get(`${baseUrl}/auth/me`),
  fetchUserData: userId =>
    requestInstance.get(`${baseUrl}/auth/user/${userId}`),
  updateUserData: userData =>
    requestInstance.patch(`${baseUrl}/auth/update_profile/`, userData),
  uploadImage: Image => requestInstance.post(`${baseUrl}/upload_image/`, Image),
  getUserQuestions: () => requestInstance.get(`${baseUrl}/questions/my`),
  getUserAnswer: () => requestInstance.get(`${baseUrl}/questions/answer/my`),
  getUserResources: () => requestInstance.get(`${baseUrl}/resources/my`),
  register: userData =>
    requestInstance.post(`${baseUrl}/auth/register/`, userData),
  login: ({ username, password }) =>
    requestInstance.post(`${baseUrl}/auth/login/`, {
      username,
      password
    })
});

export default UserRequests;
