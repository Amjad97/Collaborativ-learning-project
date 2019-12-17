/**
 * All resources service API requests.
 */
const CategoryRequests = (requestInstance, baseUrl) => ({
  getCategories: () => requestInstance.get(`${baseUrl}/categories/`),
  getCategory: categoryId =>
    requestInstance.get(`${baseUrl}/categories/${categoryId}`),
  addCategory: categoryData =>
    requestInstance.post(`${baseUrl}/categories`, categoryData)
});

export default CategoryRequests;
