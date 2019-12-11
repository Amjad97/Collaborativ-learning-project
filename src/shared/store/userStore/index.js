import { types, getParent, flow } from "mobx-state-tree";
import RegisterStore from "./RegisterStore";

import UserService from "./services/user.service";

const userStore = types
  .model({
    user: types.optional(
      types.model({
        accountId: types.number,
        role: types.string,
        isSignedIn: types.boolean
      }),
      {
        accountId: 0,
        role: "guest",
        isSignedIn: true
      }
    ),
    registerStore: types.optional(RegisterStore, {}),
    isSubmitting: false,
    error: types.optional(types.frozen({}), {})
  })
  .views(self => ({
    get rootStore() {
      return getParent(self);
    },

    get userNotFound() {
      return self.error.code === "UserNotFoundException";
    },
    get isGuest() {
      return self.user.role === "guest";
    },

    get notAuth() {
      return self.error.code === "NotAuthorizedException";
    }
  }))
  .actions(self => ({
    clearError: () => {
      self.error = {};
    },

    setError: (code, message) => {
      self.error = { code, message };
    },

    setIsSubmitting: isSubmitting => {
      self.isSubmitting = isSubmitting;
    },

    setUserRole: accountType => {
      self.user.role = accountType;
    },

    clearUser: () => {
      self.user = {
        accountId: 0,
        role: "guest",
        isSignedIn: false
      };
    },

    login: flow(function* login(email, password) {
      self.setIsSubmitting(true);
      self.clearError();
      try {
        yield UserService.login(email, password);
      } catch (err) {
        // This err indicates an invited user.
        self.setError(err.code, err.message);
      } finally {
        self.setIsSubmitting(false);
      }
    }),

    forgotPassword: flow(function* forgotPassword(email) {
      self.isSubmitting = true;
      self.clearError();
      try {
        yield UserService.forgotPassword(email);
      } catch (err) {
        self.setError(err.code, err.message);
      } finally {
        self.isSubmitting = false;
      }
    }),

    logout: flow(function* logout() {
    }),

    resetPassword: flow(function* resetPassword(email, code, password) {
      self.clearError();
      try {
        yield UserService.forgotPasswordSubmit(email, code, password);
      } catch (err) {
        self.setError(err.code, err.message);
      } finally {
        self.isSubmitting = false;
      }
    })
  }));

export default userStore;
