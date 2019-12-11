import { apiRequests } from '../../../../services/apiRequests';

const CategoriesService = {
  // get categories
  getCategories: () => apiRequests.CategoryApiRequests
    .getCategories(),
};
export default CategoriesService;
