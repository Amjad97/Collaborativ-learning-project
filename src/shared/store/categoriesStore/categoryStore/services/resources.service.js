import { apiRequests } from '../../../../services/apiRequests';

const ResourcesService = {
  // get questions for specific category
  getResources: (categoryId) => apiRequests.ResourceApiRequests
    .getResources(categoryId),
};
export default ResourcesService;
