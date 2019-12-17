import { types } from "mobx-state-tree";

const answerStore = types.model({
  id: types.optional(types.number, 0),
  user: types.optional(types.number, 0),
  question: types.optional(types.number, 0),
  answer: types.optional(types.string, ""),
  createdAt: types.optional(types.string, ""),
  updatedAt: types.optional(types.string, ""),
  votes: types.optional(types.number, 0)
});

export default answerStore;
