export const selectToastNotificationsState = state =>
  state.toastNotifications;

export const selectToastNotificationsMessagesList = (state) => {
  const { messages } = selectToastNotificationsState(state);

  return Object.entries(messages).map(([key, message]) => ({ key, ...message }));
};
