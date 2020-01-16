import { types } from "mobx-state-tree";

const user = types.model({
  id: types.optional(types.number, 0),
  firstName: types.optional(types.string, ""),
  lastName: types.optional(types.string, ""),
  title: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
  email: types.optional(types.string, ""),
  password: types.optional(types.string, ""),
  accountType: types.maybeNull(types.optional(types.string, '')),
});

export default user;
