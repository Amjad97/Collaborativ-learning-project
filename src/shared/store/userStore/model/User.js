import { types, flow } from "mobx-state-tree";
import UserService from "../services/user.service";
import question from "../../categoriesStore/categoryStore/models/questionModel";
import resource from "../../categoriesStore/categoryStore/models/resourceModel";
import answer from "../../categoriesStore/categoryStore/models/answerModel";

const user = types
  .model({
    id: types.optional(types.number, 0),
    firstName: types.maybeNull(types.optional(types.string, "")),
    lastName: types.maybeNull(types.optional(types.string, "")),
    username: types.optional(types.string, ""),
    title: types.maybeNull(types.optional(types.string, "")),
    description: types.maybeNull(types.optional(types.string, "")),
    picture: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    password: types.optional(types.string, ""),
    resources: types.array(resource, []),
    questions: types.array(question, []),
    answers: types.array(answer, [])
  })
  .actions(self => ({
    fetchMyQuestions: flow(function* fetchMyQuestions() {
      try {
        const response = yield UserService.getMyQuestions();
        self.questions = response;
      } catch (err) {
        console.log(err);
      }
    }),
    fetchMyResources: flow(function* fetchMyResources() {
      try {
        const response = yield UserService.getMyResources();
        self.resources = response;
      } catch (err) {
        console.log(err);
      }
    }),
    fetchMyAnswer: flow(function* fetchMyAnswer() {
      try {
        const response = yield UserService.getMyAnswer();
        self.answers = response;
      } catch (err) {
        console.log(err);
      }
    }),
    fetchUserQuestions: flow(function* fetchUserQuestions(userId) {
      try {
        const response = yield UserService.getUserQuestions(userId);
        self.questions = response;
      } catch (err) {
        console.log(err);
      }
    }),
    fetchUserResources: flow(function* fetchUserResources(userId) {
      try {
        const response = yield UserService.getUserResources(userId);
        self.resources = response;
      } catch (err) {
        console.log(err);
      }
    }),
    fetchUserAnswer: flow(function* fetchUserAnswer(userId) {
      try {
        const response = yield UserService.getUserAnswer(userId);
        self.answers = response;
      } catch (err) {
        console.log(err);
      }
    })
  }));

export default user;
