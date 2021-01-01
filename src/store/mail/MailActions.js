import { CLOSE_SEND_MESSAGE, OPEN_SEND_MESSAGE, SELECT_MAIL } from "./../types";

export const openSendMail = () => ({
  type: OPEN_SEND_MESSAGE,
});

export const closeSendMail = () => ({
  type: CLOSE_SEND_MESSAGE,
});

export const selectMail = (data) => ({
  type: SELECT_MAIL,
  payload: data,
});
