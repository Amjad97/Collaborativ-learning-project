import { apiRequests } from "../../../services/apiRequests";

const UserService = {
  // fetchMyData
  getMyData: () => apiRequests.UserApiRequests.fetchMyData(),
  // fetchUser
  getUserData: userId => apiRequests.UserApiRequests.fetchUserData(userId),
  // updateUserData
  updateMyData: userData =>
    apiRequests.UserApiRequests.updateMyData(userData),
  // login
  login: userData => apiRequests.UserApiRequests.login(userData),
  // register
  register: userData => apiRequests.UserApiRequests.register(userData),
  // fetch my questions
  getMyQuestions: () => apiRequests.UserApiRequests.getMyQuestions(),
  // fetch my answers
  getMyAnswer: () => apiRequests.UserApiRequests.getMyAnswer(),
  // fetch my resources
  getMyResources: () => apiRequests.UserApiRequests.getMyResources(),
  // fetch user questions
  getUserQuestions: (userId) => apiRequests.UserApiRequests.getUserQuestions(userId),
  // fetch user answers
  getUserAnswer: (userId) => apiRequests.UserApiRequests.getUserAnswer(userId),
  // fetch user resources
  getUserResources: (userId) => apiRequests.UserApiRequests.getUserResources(userId)
};
export default UserService;
