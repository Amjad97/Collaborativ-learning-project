import { types } from "mobx-state-tree";
import UtilFunctions from "../../../../utils/UtilFunctions";
import { pick } from "lodash";

const answerStore = types
  .model({
    id: types.optional(types.number, 0),
    user: types.optional(types.number, 0),
    question: types.optional(types.number, 0),
    answer: types.optional(types.string, ""),
    createdAt: types.optional(types.string, ""),
    updatedAt: types.optional(types.string, ""),
    votes: types.optional(types.number, 0)
  })
  .actions(self => ({
    toAddPayload: () => {
      return UtilFunctions.toSnakeCase(
        pick(self, ["accountId", "questionId", "answer", "timestamp"])
      );
    }
  }));

export default answerStore;
