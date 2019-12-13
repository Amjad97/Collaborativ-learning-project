import { apiRequests } from "../../../../services/apiRequests";

const ResourcesService = {
  // get resources for specific category
  getResources: categoryId =>
    apiRequests.ResourceApiRequests.getResources(categoryId),
  // add resource
  addResource: (categoryId, resourceData) =>
    apiRequests.ResourceApiRequests.addResource(categoryId, resourceData)
};
export default ResourcesService;
