import { types } from "mobx-state-tree";
import UtilFunctions from "../../../../utils/UtilFunctions";
import { pick } from "lodash";

const resourceStore = types
  .model({
    id: types.maybeNull(types.optional(types.string, "")),
    accountId: types.maybeNull(types.optional(types.string, "")),
    categoryId: types.maybeNull(types.optional(types.string, "")),
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    link: types.optional(types.string, "")
  })
  .actions(self => ({
    toAddPayload: () => {
      return UtilFunctions.toSnakeCase(
        pick(self, ["accountId", "categoryId", "title", "description", "link"])
      );
    }
  }));

export default resourceStore;
