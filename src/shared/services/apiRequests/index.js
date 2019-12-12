import axios from "axios";
import makeCancelable from "axios-cancelable";
import getConfig from "../../../config";

import {
  camelCase
} from "lodash";

import getUserRequests from "./UserRequests";
import getCategoryRequests from "./CategoryRequests";
import getResourceRequests from "./ResourceRequests";
import getQuestionRequests from "./QuestionRequests";
import getAnswerRequests from "./AnswerRequests";

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
    UserApiRequests: getUserRequests(requestInstance, baseUrl),
    CategoryApiRequests: getCategoryRequests(requestInstance, baseUrl),
    ResourceApiRequests: getResourceRequests(requestInstance, baseUrl),
    QuestionApiRequests: getQuestionRequests(requestInstance, baseUrl),
    AnswerApiRequests: getAnswerRequests(requestInstance, baseUrl),
  };
};

const config = getConfig();
const apiRequests = requests(config);

export { apiRequests }; // this is a configured instance of requests, could be used directly
export default requests;
