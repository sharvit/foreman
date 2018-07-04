import debounce from 'lodash/debounce';

export const debounceMethods = (context, time, methods) => {
  methods.forEach((method) => {
    const methodName = method.name || method;
    const methodTime = method.time || time;
    // eslint-disable-next-line no-param-reassign
    context[methodName] = debounce(context[methodName], methodTime);
  });
};

export const bindMethods = (context, methods) => {
  methods.forEach((method) => {
    // eslint-disable-next-line no-param-reassign
    context[method] = context[method].bind(context);
  });
};

export const noop = Function.prototype; // empty function

// open the link in a new window
export const newWindowOnClick = url => (event) => {
  event.preventDefault();
  window.open(url, '_blank');
};
export const clearSpaces = string => string.trim().replace(/\s\s+/, ' ');

export default {
  bindMethods,
  noop,
  debounceMethods,
  clearSpaces,
};
