import { getEnv, types } from "mobx-state-tree";
import UserStore from "./userStore";
import Categories from "./categoriesStore";
import LocalStorage from "../services/LocalStorage";
import getConfig from "../../config";
import getApiRequests from "../services/apiRequests";

const RootStore = types
  .model({
    userStore: types.optional(UserStore, {}),
    categories: types.optional(Categories, {})
  })
  .views(self => ({
    get apiRequests() {
      return getEnv(self).apiRequests;
    },
    get localStorage() {
      return getEnv(self).localStorage;
    },
    get config() {
      return getEnv(self).config;
    },
    get history() {
      return getEnv(self).history;
    }
  }));

const localStorage = new LocalStorage(window.localStorage);
const config = getConfig();
const apiRequests = getApiRequests(localStorage, config);
const store = RootStore.create(
  {},
  {
    apiRequests,
    localStorage,
    config
  }
);
export default store;
