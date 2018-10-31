import { contactListReducer } from "./contact-list-reducer";
import { globalReducer } from "./global-reducer";
import contact from "../model/contact";
import { combineReducers } from "../../node_modules/redux";

export interface IContactListState {
  contactList: contact[];
}

export interface IGlobalState {
  errorMessage: string;
  contactIndex: number;
  currentContact: contact;
}

export interface IState {
  contactList: IContactListState;
  global: IGlobalState;
}
export const state = combineReducers<IState>({
  contactList: contactListReducer,
  global: globalReducer
});
