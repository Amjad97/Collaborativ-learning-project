import { types } from "mobx-state-tree";

const resource = types.model({
  id: types.optional(types.number, 0),
  user: types.optional(types.number, 0),
  username: types.optional(types.string, ""),
  category: types.optional(types.number, 0),
  createdAt: types.optional(types.string, ""),
  updatedAt: types.optional(types.string, ""),
  title: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
  platform: types.optional(types.string, ""),
  link: types.optional(types.string, ""),
  votes: types.optional(types.number, 0)
});

export default resource;
