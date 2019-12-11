import { types } from "mobx-state-tree";

const user = types.model({
  firstName: types.optional(types.string, ""),
  lastName: types.optional(types.string, ""),
  email: types.optional(types.string, ""),
  password: types.optional(types.string, ""),
  accountId: types.maybeNull(types.optional(types.string, '')),
  accountType: types.maybeNull(types.optional(types.string, '')),
});

export default user;
