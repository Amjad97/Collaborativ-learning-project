import { apiRequests } from "../../../../services/apiRequests";

const ResourcesService = {
  // get resources for specific category
  getResources: categoryId =>
    apiRequests.ResourceApiRequests.getResources(categoryId),
  // add resource
  addResource: (resourceData) =>
    apiRequests.ResourceApiRequests.addResource(resourceData)
};
export default ResourcesService;
