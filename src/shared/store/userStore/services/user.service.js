import { apiRequests } from "../../../services/apiRequests";

const UserService = {
  // fetchMyData
  getMyData: () => apiRequests.UserApiRequests.fetchMyData(),
  // fetchUser
  getUserData: userId => apiRequests.UserApiRequests.fetchUserData(userId),
  // updateUserData
  updateUserData: userData =>
    apiRequests.UserApiRequests.updateUserData(userData),
  // uploadImage
  uploadImage: Image => apiRequests.UserApiRequests.uploadImage(Image),
  // login
  login: userData => apiRequests.UserApiRequests.login(userData),
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
