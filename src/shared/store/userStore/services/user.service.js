import { apiRequests } from "../../../services/apiRequests";

const UserService = {
  // login
  login: (email, password) =>
    apiRequests.UserApiRequests.login(email, password),
  register: ({ user }) => apiRequests.UserApiRequests.register({ user }),
  forgotPassword: email => apiRequests.UserApiRequests.forgotPassword(email), // not add yet
  forgotPasswordSubmit: (email, code, password) =>
    apiRequests.UserApiRequests.forgotPasswordSubmit(email, code, password) // not add yet
};
export default UserService;
