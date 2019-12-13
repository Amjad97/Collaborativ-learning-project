import { apiRequests } from "../../../../services/apiRequests";

const CategoriesService = {
  // get categories
  getCategories: () => apiRequests.CategoryApiRequests.getCategories(),
  // add category
  addCategory: categoryData =>
    apiRequests.CategoryApiRequests.addCategory(categoryData)
};
export default CategoriesService;
