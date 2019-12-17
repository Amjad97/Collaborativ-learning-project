/**
 * All resources service API requests.
 */
const ResourceRequests = (requestInstance, baseUrl) => ({
  getResources: categoryId =>
    requestInstance.get(`${baseUrl}/resources/category/${categoryId}`),
  addResource: (resourceData) =>
    requestInstance.post(
      `${baseUrl}/resources/`,
      resourceData
    )
});

export default ResourceRequests;
