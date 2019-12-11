/**
 * All resources service API requests.
 */
const ResourceRequests = (requestInstance, baseUrl) => ({
    getResources: (categoryId) => requestInstance.get(`${baseUrl}/`)
});

export default ResourceRequests;
