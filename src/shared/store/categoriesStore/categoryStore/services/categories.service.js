import { apiRequests } from "../../../../services/apiRequests";

const CategoriesService = {
  // get categories
  getCategories: () => apiRequests.CategoryApiRequests.getCategories(),
  // get category
  getCategory: categoryId =>
    apiRequests.CategoryApiRequests.getCategory(categoryId),
  // add category
  addCategory: categoryData =>
    apiRequests.CategoryApiRequests.addCategory(categoryData)
};
export default CategoriesService;
