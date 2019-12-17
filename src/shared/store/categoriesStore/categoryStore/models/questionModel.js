import { types, flow } from "mobx-state-tree";

import Answer from "./answerModel";
import AnswersService from "../services/answers.service";
import UtilFunctions from "../../../../utils/UtilFunctions";
import { pick } from "lodash";

const question = types
  .model({
    id: types.optional(types.number, 0),
    user: types.optional(types.number, 0),
    category: types.optional(types.number, 0),
    question: types.optional(types.string, ""),
    createdAt: types.optional(types.string, ""),
    updatedAt: types.optional(types.string, ""),
    answers: types.array(Answer),
    votes: types.optional(types.number, 0)
  })
  .views(self => ({
    get allAnswers() {
      return self.answers;
    },
    get numOfAnswers() {
      return self.answers.length;
    }
  }))
  .actions(self => ({
    fetchAnswers: flow(function* fetchAnswers(questionId) {
      try {
        const response = yield AnswersService.getAnswers(questionId);
        self.answers = response;
      } catch (error) {
        console.log(error);
      }
    }),
    addAnswer: flow(function* addAnswer(payload) {
      try {
        yield AnswersService.addAnswer(payload);
        self.fetchAnswers();
      } catch (error) {
        console.log(error);
      }
    }),
    toAddPayload: () => {
      return UtilFunctions.toSnakeCase(
        pick(self, ["accountId", "categoryId", "title", "description"])
      );
    }
  }));

export default question;
