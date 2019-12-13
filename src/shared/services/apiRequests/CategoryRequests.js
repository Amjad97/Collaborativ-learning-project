/**
 * All resources service API requests.
 */
const CategoryRequests = (requestInstance, baseUrl) => ({
  getCategories: () => requestInstance.get(`${baseUrl}/`),
  addCategory: categoryData => requestInstance.post(`${baseUrl}/`)
});

export default CategoryRequests;
