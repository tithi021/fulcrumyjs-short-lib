/**
 * Developer Afroza Yasmin
 * Created Date: 27-11-2018
 */

// Merge two or multiple objects
const mergeObj = (...arg) => {
  arg.map(param => {
    if (param instanceof Object == false) {
      throw console.error(`${param} parameter is not an object`);
    }
  });
  return Object.assign(...arg);
};

// Check is Object
const isObject = value => {
  if (value !== null && (value instanceof Object || value instanceof Function))
    return true;
  return false;
};

// Check is Array
const isArray = data => {
  if (data !== null && (data instanceof Array || data instanceof Function))
    return true;
  return false;
};

// Check is Number
const isNumber = value => {
  const type = typeof value;
  if (value != null && type == 'number') return true;
  return false;
};

// Check is String
const isString = value => {
  const type = typeof value;
  if (value != null && type == 'string') return true;
  return false;
};

// Check is Null
const isNull = value => {
  return value === null ? true : false;
};

// Check is Undefined
const isUndefined = value => {
  return value === undefined ? true : false;
};

// Get random value from pre-defined array
const randomValueFromArray = arr => {
  if (isArray(arr)) {
    const length = arr ? arr.length : 0;

    return length ? arr[Math.floor(Math.random() * length)] : undefined;
  } else {
    throw console.error(`${arr} is not array type`);
  }
};

// Merge Multiple Array's
const mergeArrays = (...arg) => {
  let arrs = [];
  arg.map(data => {
    if (!isArray(data)) {
      throw console.error(`All properties is not array type`);
    }
    arrs.push(data);
  });

  return arrs;
};
