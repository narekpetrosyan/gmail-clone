import { combineReducers } from "redux";
import { MailReducer } from "./mail/MailReducer";
import { UserReducer } from "./user/UserReducer";

export const rootReducer = combineReducers({
  mails: MailReducer,
  user: UserReducer,
});
