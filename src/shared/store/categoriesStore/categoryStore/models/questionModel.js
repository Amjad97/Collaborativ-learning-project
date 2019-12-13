import { types, flow } from "mobx-state-tree";

import Answer from "./answerModel";
import AnswersService from "../services/answers.service";
import UtilFunctions from "../../../../utils/UtilFunctions";
import { pick } from "lodash";

const questionStore = types
  .model({
    id: types.maybeNull(types.optional(types.string, "")),
    accountId: types.maybeNull(types.optional(types.string, "")),
    categoryId: types.maybeNull(types.optional(types.string, "")),
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    answers: types.array(Answer),
    numOfVotes: types.optional(types.number, 0)
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
    fetchAnswers: flow(function* fetchAnswers() {
      try {
        const response = yield AnswersService.getAnswers(self.id);
        self.answers = [...response.data];
      } catch (error) {
        console.log(error);
      }
    }),
    addAnswer: flow(function* addAnswer(payload) {
      try {
        yield AnswersService.addAnswer(self.id, payload);
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

export default questionStore;
