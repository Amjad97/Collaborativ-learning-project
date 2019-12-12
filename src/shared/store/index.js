import { getEnv, types } from "mobx-state-tree";
import UserStore from "./userStore";
import CategoriesStore from "./categoriesStore";
import getConfig from "../../config";
import getApiRequests from "../services/apiRequests";

const RootStore = types
  .model({
    userStore: types.optional(UserStore, {}),
    categoriesStore: types.optional(CategoriesStore, {})
  })
  .views(self => ({
    get apiRequests() {
      return getEnv(self).apiRequests;
    },
    get config() {
      return getEnv(self).config;
    },
    get history() {
      return getEnv(self).history;
    }
  }));

const config = getConfig();
const apiRequests = getApiRequests(config);
const store = RootStore.create(
  {},
  {
    apiRequests,
    config
  }
);
export default store;
