import { types, flow } from "mobx-state-tree";

import Answer from "./answerModel";
import AnswersService from "../services/answers.service";

const question = types
  .model({
    id: types.optional(types.number, 0),
    user: types.optional(types.number, 0),
    category: types.optional(types.number, 0),
    question: types.optional(types.string, ""),
    createdAt: types.optional(types.string, ""),
    updatedAt: types.optional(types.string, ""),
    answers: types.array(Answer),
    numOfAnswers: types.optional(types.number, 0),
    votes: types.optional(types.number, 0)
  })
  .views(self => ({
    get allAnswers() {
      return self.answers;
    }
  }))
  .actions(self => ({
    fetchAnswers: flow(function* fetchAnswers(questionId) {
      try {
        const response = yield AnswersService.getAnswers(questionId);
        self.answers = response;
        self.numOfAnswers = self.answers.length;
      } catch (error) {
        console.log(error);
      }
    }),
    addAnswer: flow(function* addAnswer(payload) {
      try {
        yield AnswersService.addAnswer(payload);
        self.fetchAnswers(payload.question);
      } catch (error) {
        console.log(error);
      }
    })
  }));

export default question;
