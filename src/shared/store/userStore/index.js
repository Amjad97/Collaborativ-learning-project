import { types, flow } from "mobx-state-tree";
import RegisterStore from "./RegisterStore";
import user from "./model/User";
import UserService from "./services/user.service";

const userStore = types
  .model({
    users: types.array(user, []),
    user: types.optional(user, {}),
    registerStore: types.optional(RegisterStore, {})
  })
  .actions(self => ({
    fetchUserData: flow(function* fetchUserData(userId) {
      try {
        const response = yield UserService.getUserData(userId);
        self.user = response;
      } catch (error) {
        console.log(error);
      }
    }),

    updateUserData: flow(function* updateUserData(userData) {
      try {
        const response = yield UserService.updateUserData(userData);
        self.user = response;
      } catch (error) {
        console.log(error);
      }
    }),

    login: flow(function* login(email, password) {
      try {
        const response = yield UserService.login(email, password);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }),

    logout: flow(function* logout() {})
  }));

export default userStore;
