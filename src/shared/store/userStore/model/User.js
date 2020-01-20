import { types, flow } from "mobx-state-tree";
import UserService from "../services/user.service";
import question from "../../categoriesStore/categoryStore/models/questionModel";
import resource from "../../categoriesStore/categoryStore/models/resourceModel";
import answer from "../../categoriesStore/categoryStore/models/answerModel";

const user = types
  .model({
    id: types.optional(types.number, 0),
    firstName: types.optional(types.string, ""),
    lastName: types.optional(types.string, ""),
    username: types.optional(types.string, ""),
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    image: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    password: types.optional(types.string, ""),
    resources: types.array(resource, []),
    questions: types.array(question, []),
    answers: types.array(answer, []),
  })
  .actions(self => ({
    fetchUserQuestions: flow(function* fetchUserQuestions() {
      try {
        const response = yield UserService.getUserQuestions();
        self.questions = response;
      } catch (err) {
        console.log(err);
      }
    }),
    fetchUserResources: flow(function* fetchUserResources() {
      try {
        const response = yield UserService.getUserResources();
        self.resources = response;
      } catch (err) {
        console.log(err);
      }
    }),
    fetchUserAnswer: flow(function* fetchUserAnswer() {
      try {
        const response = yield UserService.getUserAnswer();
        self.answers = response;
      } catch (err) {
        console.log(err);
      }
    })
  }));

export default user;
