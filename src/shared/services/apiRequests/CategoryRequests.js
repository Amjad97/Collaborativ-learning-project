/**
 * All resources service API requests.
 */
const CategoryRequests = (requestInstance, baseUrl) => ({
  getCategories: () => requestInstance.get(`${baseUrl}/`)
});

export default CategoryRequests;
