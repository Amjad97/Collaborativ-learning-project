import { types, flow } from "mobx-state-tree";

import category from "./categoryStore";
import CategoryService from "./categoryStore/services/categories.service";

const categoriesStore = types
  .model({
    categories: types.array(category, []),
    category: types.maybeNull(types.optional(category, {})),
  })
  .actions(self => ({
    fetchCategories: flow(function* fetchCategories() {
      try {
        const response = yield CategoryService.getCategories();
        self.categories = response;
      } catch (error) {
        console.log(error);
      }
    }),
    fetchCategory: flow(function* fetchCategories(categoryId) {
      try {
        const response = yield CategoryService.getCategory(categoryId);
        self.category = response;
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
