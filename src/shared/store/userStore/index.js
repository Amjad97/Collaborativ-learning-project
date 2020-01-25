import { types, flow } from "mobx-state-tree";
import user from "./model/User";
import UserService from "./services/user.service";
import history from "../../../history";
import Utils from "shared/utils/UtilFunctions";

const userStore = types
  .model({
    users: types.array(user, []),
    myprofile: types.optional(user, {}),
    user: types.optional(user, {})
  })
  .actions(self => ({
    fetchMyData: flow(function* fetchMyData() {
      try {
        const response = yield UserService.getMyData();
        self.myprofile = response;
      } catch (error) {
        console.log(error);
      }
    }),

    fetchUserData: flow(function* fetchUserData(userId) {
      try {
        const response = yield UserService.getUserData(userId);
        self.user = response;
      } catch (error) {
        console.log(error);
      }
    }),

    updateMyData: flow(function* updateMyData(userData) {
      try {
        const response = yield UserService.updateMyData(userData);
        self.user = response;
        self.fetchMyData();
      } catch (error) {
        console.log(error);
      }
    }),

    login: flow(function* login(userData) {
      try {
        const response = yield UserService.login(userData);
        const accessToken = response.access;
        const refreshToken = response.refresh;
        localStorage.setItem("username", userData.username);
        localStorage.setItem("userToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("isLoggedIn", "true");
        history.push("/home");
      } catch (err) {
        console.log(err);
      }
    }),

    googleAuth: () => {
      window.location.href =
        "http://kareemayesh.com:8000/auth/social-auth/login/google-oauth2/";
      localStorage.setItem("isLoggedIn", "true");
    },
    register: async userData => {
      try {
        const response = await UserService.register(userData);
        console.log(response);
        if (!!response) {
          localStorage.setItem("rememberMe", "false");
          localStorage.setItem("userName", "");
          localStorage.setItem("password", "");
          history.push("/login");
          Utils.addNotification(
            "Create Account",
            "Created successfully",
            "success"
          );
        } else {
          Utils.addNotification(
            "Create Account",
            "Username is already exist",
            "danger"
          );
        }
      } catch (err) {
        console.log(err.message);
      }
    },
    logout: function logout() {
      try {
        localStorage.setItem("isLoggedIn", "false");
        localStorage.setItem("username", "");
        localStorage.setItem("userToken", "");
        localStorage.setItem("refreshToken", "");
        history.push("/");
      } catch (err) {
        console.log(err.message);
      }
    }
  }));

export default userStore;
