import { types, flow } from "mobx-state-tree";

import resources from "./models/resourceModel";
import questions from "./models/questionModel";

import ResourcesService from "./services/resources.service";
import QuestionsService from "./services/questions.service";

const categoryStore = types
  .model({
    id: types.maybeNull(types.optional(types.string, "")),
    resources: types.array(resources),
    questions: types.array(questions)
  })
  .views(self => ({
    get allResources() {
      return self.resources;
    },
    get allQuestion() {
      return self.questions;
    }
  }))
  .actions(self => ({
    fetchResources: flow(function* fetchResources() {
      try {
        const response = yield ResourcesService.getResources(self.id);
        self.resources = [...response.data];
      } catch (error) {
        console.log(error);
      }
    }),
    fetchQuestions: flow(function* fetchQuestions() {
      try {
        const response = yield QuestionsService.getQuestions(self.id);
        self.resources = [...response.data];
      } catch (error) {
        console.log(error);
      }
    }),
    addResource: resource => {},
    addQuestion: question => {}
  }));

export default categoryStore;
