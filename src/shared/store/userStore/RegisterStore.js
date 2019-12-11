import { types, getParent } from "mobx-state-tree";
import User from "./model/User";
import UserService from "./services/user.service";

const registerStore = types
  .model({
    user: types.optional(User, {})
  })
  .views(self => ({
    userApiRequests() {
      return getParent(self).userApiRequests;
    },
    setIsSubmitting(isSubmitting) {
      return getParent(self).setIsSubmitting(isSubmitting);
    },
    get getIsSubmitting() {
      return getParent(self).isSubmitting;
    },
    clearError() {
      return getParent(self).clearError();
    },
    setError(code, msg) {
      return getParent(self).setError(code, msg);
    },
    getError() {
      return getParent(self).error;
    }
  }))
  .actions(self => ({
    setRegisterUserValue: (name, value) => {
      self.user[name] = value;
      self.clearError();
    },
    /**
     * @desc clears all registration modal fields (e.g. email, password etc.)
     */
    clearAllRegisterFields: () => {
      const fields = Object.keys(self.user);
      fields.forEach(fieldName => self.setRegisterUserValue(fieldName, ""));
    },
    register: async function() {
      self.setIsSubmitting(true);
      self.clearError();
      try {
        await UserService.register(self.registerUser);
      } catch (err) {
        self.setError(err.code, err.message);
      } finally {
        self.setIsSubmitting(false);
      }
    }
  }));

export default registerStore;
