import { apiRequests } from "../../../services/apiRequests";

const UserService = {
  // fetchUser
  getUserData: userId => apiRequests.UserApiRequests.fetchUserData(userId),
  // updateUserData
  updateUserData: userData =>
    apiRequests.UserApiRequests.updateUserData(userData),
  // login
  login: (email, password) =>
    apiRequests.UserApiRequests.login(email, password),
  // register
  register: userData => apiRequests.UserApiRequests.register(userData),
  // fetchUser questions
  getUserQuestions: () => apiRequests.UserApiRequests.getUserQuestions(),
  // fetchUser answers
  getUserAnswer: () => apiRequests.UserApiRequests.getUserAnswer(),
  // fetchUser resources
  getUserResources: () => apiRequests.UserApiRequests.getUserResources()
};
export default UserService;
