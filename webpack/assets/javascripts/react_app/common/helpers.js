export default {
  bindMethods(context, methods) {
    methods.forEach((method) => {
      // eslint-disable-next-line no-param-reassign
      context[method] = context[method].bind(context);
    });
  },
  noop: Function.prototype, // empty function
  urlBuilder(controller, action, id = undefined) {
    return `/${controller}/${id ? `${id}/` : ''}${action !== 'show' ? action : ''}`;
  },
};
