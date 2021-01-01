import { CLOSE_SEND_MESSAGE, OPEN_SEND_MESSAGE, SELECT_MAIL } from "./../types";
const initialState = {
  sendMessageIsOpen: false,
  selectedMail: null,
};

export const MailReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_SEND_MESSAGE:
      return {
        sendMessageIsOpen: true,
      };
    case CLOSE_SEND_MESSAGE:
      return {
        sendMessageIsOpen: false,
      };
    case SELECT_MAIL:
      return {
        selectedMail: payload,
      };
    default:
      return state;
  }
};
