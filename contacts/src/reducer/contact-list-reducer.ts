import { IContactListState } from "./comb";
import { contactTypes } from "../action/contact/contact-types";
import contact from "../model/contact";

export const contactInitialState: IContactListState = {
  contactList: []
};
export const contactListReducer = (
  state: IContactListState = contactInitialState,
  action: any
) => {
  switch (action.type) {
    case contactTypes.EDIT_CONTACT:
      state.contactList.splice(action.payload.contactIndex, 1);
      state.contactList.push(action.payload.contact);
      return {
        ...state
      };
    case contactTypes.DELETE_CONTACT:
      state.contactList.splice(action.payload.contactIndex, 1);
      return {
        ...state
      };
    case contactTypes.SAVE_CONTACT:
      state.contactList.push(action.payload.contact);
      state.contactList.sort((a: contact, b: contact) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
      return {
        ...state
      };
    default:
      return state;
  }
};
