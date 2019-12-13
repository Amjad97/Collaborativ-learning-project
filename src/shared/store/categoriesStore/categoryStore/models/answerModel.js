import { types } from "mobx-state-tree";
import UtilFunctions from "../../../../utils/UtilFunctions";
import { pick } from "lodash";

const answerStore = types
  .model({
    id: types.maybeNull(types.optional(types.string, "")),
    accountId: types.maybeNull(types.optional(types.string, "")),
    questionId: types.maybeNull(types.optional(types.string, "")),
    answer: types.optional(types.string, ""),
    timestamp: types.maybeNull(types.string)
  })
  .actions(self => ({
    toAddPayload: () => {
      return UtilFunctions.toSnakeCase(
        pick(self, ["accountId", "questionId", "answer", "timestamp"])
      );
    }
  }));

export default answerStore;
