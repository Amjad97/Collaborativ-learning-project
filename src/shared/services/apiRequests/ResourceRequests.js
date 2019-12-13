/**
 * All resources service API requests.
 */
const ResourceRequests = (requestInstance, baseUrl) => ({
  getResources: categoryId => requestInstance.get(`${baseUrl}/`),
  addResource: (categoryId, resourceData) => requestInstance.post(`${baseUrl}/`)
});

export default ResourceRequests;
