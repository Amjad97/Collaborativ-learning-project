import { types } from "mobx-state-tree";

const answerStore = types.model({
  id: types.maybeNull(types.optional(types.string, "")),
  accountId: types.maybeNull(types.optional(types.string, "")),
  questionId: types.maybeNull(types.optional(types.string, "")),
  answer: types.optional(types.string, ""),
  timestamp: types.maybeNull(types.string),
});

export default answerStore;
