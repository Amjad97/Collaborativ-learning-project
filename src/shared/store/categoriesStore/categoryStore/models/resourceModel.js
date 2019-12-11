import { types } from "mobx-state-tree";

const resourceStore = types.model({
  id: types.maybeNull(types.optional(types.string, "")),
  accountId: types.maybeNull(types.optional(types.string, "")),
  categoryId: types.maybeNull(types.optional(types.string, "")),
  title: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
  link: types.optional(types.string, "")
});

export default resourceStore;
