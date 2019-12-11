import axios from "axios";
import makeCancelable from "axios-cancelable";
import getConfig from "../../../config";

import {
  camelCase
} from "lodash";

import getUserRequeste from "./UserRequeste";
import getCategoryRequeste from "./CategoryRequeste";
import getResourceRequeste from "./ResourceRequeste";
import getQuestionRequeste from "./QuestionRequeste";
import getAnswerRequeste from "./AnswerRequeste";

// make the Axios requests cancelable
makeCancelable(axios, { debug: true });

const toCamelCase = obj => {
  if (Array.isArray(obj)) {
    return obj.map(v => toCamelCase(v));
  }
  if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: toCamelCase(obj[key])
      }),
      {}
    );
  }
  return obj;
};

// Process the request response
const processResponse = (response) => {
  return toCamelCase(response.data);
};

// Request wrapper
class Request {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;

    this.get = this.get.bind(this);
    this.del = this.del.bind(this);
    this.patch = this.patch.bind(this);
    this.put = this.put.bind(this);
    this.post = this.post.bind(this);
  }

  async send(method, url, data = {}) {
    return axios({
      url,
      method,
      data
    })
      .then(response => processResponse(response))
      .catch(error => console.log(error));
  }

  del(url) {
    return this.send("delete", url);
  }

  get(url) {
    return this.send("get", url);
  }

  patch(url, data) {
    return this.send("patch", url, data);
  }

  put(url, data) {
    return this.send("put", url, data);
  }

  post(url, data) {
    return this.send("post", url, data);
  }
}

const requests = (config) => {
  const baseUrl = config.apiUrl;
  const requestInstance = new Request(baseUrl);
  return {
    requestInstance,
    UserApiRequests: getUserRequeste(requestInstance, baseUrl),
    CategoryApiRequests: getCategoryRequeste(requestInstance, baseUrl),
    ResourceApiRequests: getResourceRequeste(requestInstance, baseUrl),
    QuestionApiRequests: getQuestionRequeste(requestInstance, baseUrl),
    AnswerApiRequests: getAnswerRequeste(requestInstance, baseUrl),
  };
};

const config = getConfig();
const apiRequests = requests(config);

export { apiRequests }; // this is a configured instance of requests, could be used directly
export default requests;
