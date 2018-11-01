import { IGlobalState } from "./comb";
import { contactTypes } from "../action/contact/contact-types";
import { contactListTypes } from "../action/contact-list/contact-list-types";
import Contact from "../model/contact";

export const initialState: IGlobalState = {
  errorMessage: "",
  contactIndex: 0,
  currentContact: new Contact("", "", "", "")
};
export const globalReducer = (
  state: IGlobalState = initialState,
  action: any
) => {
  switch (action.type) {
    case contactListTypes.SELECT_CONTACT:
      return {
        ...state,
        currentContact: action.payload.currentContact,
        contactIndex: action.payload.contactIndex
      };
    case contactTypes.CLEAR_CONTACT:
      return {
        ...state,
        currentContact: new Contact("", "", "", "")
      };
    default:
      return state;
  }
};
