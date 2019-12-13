import { types, flow } from "mobx-state-tree";

import category from "./categoryStore";
import CategoryService from "./categoryStore/services/categories.service";

const categoriesStore = types
  .model({
    categories: types.optional(types.array(category), [])
  })
  .actions(self => ({
    fetchCategories: flow(function* fetchCategories() {
      try {
        const response = yield CategoryService.getCategories();
        self.categories = [...response.data];
      } catch (error) {
        console.log(error);
      }
    }),
    addCategory: flow(function* addCategory(payload) {
      try {
        yield CategoryService.addCategory(payload);
        self.fetchCategories();
      } catch (error) {
        console.log(error);
      }
    })
  }));

export default categoriesStore;
