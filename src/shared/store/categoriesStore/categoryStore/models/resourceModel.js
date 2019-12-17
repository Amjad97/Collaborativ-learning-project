import { types } from "mobx-state-tree";
import UtilFunctions from "../../../../utils/UtilFunctions";
import { pick } from "lodash";

const resource = types
  .model({
    id: types.optional(types.number, 0),
    user: types.optional(types.number, 0),
    category: types.optional(types.number, 0),
    createdAt: types.optional(types.string, ""),
    updatedAt: types.optional(types.string, ""),
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    link: types.optional(types.string, ""),
    votes: types.optional(types.number, 0)
  })
  .actions(self => ({
    toAddPayload: () => {
      return UtilFunctions.toSnakeCase(
        pick(self, ["user", "category", "title", "description", "link"])
      );
    }
  }));

export default resource;
