import { types, flow } from "mobx-state-tree";

import resource from "./models/resourceModel";
import question from "./models/questionModel";

import ResourcesService from "./services/resources.service";
import QuestionsService from "./services/questions.service";

import Utils from "shared/utils/UtilFunctions";

const categoryStore = types
  .model({
    id: types.optional(types.number, 0),
    name: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    createdAt: types.optional(types.string, ""),
    updatedAt: types.optional(types.string, ""),
    resources: types.array(resource, []),
    questions: types.array(question, []),
    question: types.maybeNull(types.optional(question, {}))
  })
  .actions(self => ({
    fetchResources: flow(function* fetchResources(categoryId) {
      try {
        const response = yield ResourcesService.getResources(categoryId);
        self.resources = response;
      } catch (error) {
        console.log(error);
      }
    }),
    fetchQuestions: flow(function* fetchQuestions(categoryId) {
      try {
        const response = yield QuestionsService.getQuestions(categoryId);
        self.questions = response;
      } catch (error) {
        console.log(error);
      }
    }),
    fetchQuestion: flow(function* fetchQuestions(questionId) {
      try {
        const response = yield QuestionsService.getQuestion(questionId);
        self.question = response;
      } catch (error) {
        console.log(error);
      }
    }),
    addResource: flow(function* addResource(payload) {
      try {
        const response = yield ResourcesService.addResource(payload);
        self.fetchResources(payload.category);
        if (!!response) {
          Utils.addNotification(
            "Add Resource",
            "Added successfully",
            "success"
          );
        } else {
          Utils.addNotification("Add Resource", "Failed to add", "danger");
        }
      } catch (error) {
        console.log(error);
      }
    }),
    addQuestion: flow(function* addQuestion(payload) {
      try {
        const response = yield QuestionsService.addQuestion(payload);
        self.fetchQuestions(payload.category);
        if (!!response) {
          Utils.addNotification(
            "Ask Question",
            "Asked successfully",
            "success"
          );
        } else {
          Utils.addNotification("Ask Question", "Failed to ask", "danger");
        }
      } catch (error) {
        console.log(error);
      }
    })
  }));

export default categoryStore;
