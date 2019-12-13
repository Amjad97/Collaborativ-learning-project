import { mapKeys, camelCase, mapValues, snakeCase } from "lodash";

const UtilFunctions = {
  /**
   * @desc used to transform the keys of object to camelCase
   * @param obj
   * @return {object}
   */
  toCamel: obj => {
    if (Array.isArray(obj)) {
      return obj.map(entry => UtilFunctions.toCamel(entry));
    }
    if (!UtilFunctions.isPlainObject(obj)) return obj;

    let result = mapKeys(obj, (v, k) => camelCase(k));

    result = mapValues(result, (v, k) => {
      if (UtilFunctions.isPlainObject(v) || Array.isArray(v)) {
        return UtilFunctions.toCamel(v);
      }
      return v;
    });

    return result;
  },

  /**
   * @desc used to transform the keys of object to snake_case
   * @param obj
   * @return {object}
   */
  toSnakeCase: obj => {
    if (Array.isArray(obj)) {
      return obj.map(entry => {
        if (UtilFunctions.isPlainObject(entry) || Array.isArray(entry)) {
          return UtilFunctions.toSnakeCase(entry);
        }
        return entry;
      });
    }
    let result = mapKeys(obj, (v, k) => snakeCase(k));
    result = mapValues(result, (v, k) => {
      if (UtilFunctions.isPlainObject(v) || Array.isArray(v)) {
        return UtilFunctions.toSnakeCase(v);
      }
      return v;
    });

    return result;
  }
};

export default UtilFunctions;
