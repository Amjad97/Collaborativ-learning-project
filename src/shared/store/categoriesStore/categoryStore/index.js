import { types, flow } from "mobx-state-tree";

import resources from "./models/resourceModel";
import questions from "./models/questionModel";

import ResourcesService from "./services/resources.service";
import QuestionsService from "./services/questions.service";

import UtilFunctions from "../../../utils/UtilFunctions";
import { pick } from "lodash";

const categoryStore = types
  .model({
    id: types.maybeNull(types.optional(types.string, "")),
    title: types.optional(types.string, ""),
    resources: types.array(resources),
    questions: types.array(questions)
  })
  .views(self => ({
    get gategoryTitle() {
      return self.title;
    },
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
    addResource: flow(function* addResource(payload) {
      try {
        yield ResourcesService.addResource(self.id, payload);
        self.fetchResources();
      } catch (error) {
        console.log(error);
      }
    }),
    addQuestion: flow(function* addQuestion(payload) {
      try {
        yield QuestionsService.addQuestion(self.id, payload);
        self.fetchQuestions();
      } catch (error) {
        console.log(error);
      }
    }),
    toAddPayload: () => {
      return UtilFunctions.toSnakeCase(pick(self, ["title"]));
    }
  }));

export default categoryStore;
