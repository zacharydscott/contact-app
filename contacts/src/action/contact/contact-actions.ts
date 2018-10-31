import { contactTypes } from "./contact-types";
import contact from "../../model/contact";
export const clearContact = () => {
  return {
    payload: {},
    type: contactTypes.CLEAR_CONTACT
  };
};
export const saveContact = (newContact: contact) => {
  return {
    payload: { contact: newContact },
    type: contactTypes.SAVE_CONTACT
  };
};
export const deleteContact = (contactNumber: number) => {
  return {
    payload: { contactIndex: contactNumber },
    type: contactTypes.DELETE_CONTACT
  };
};

export const editContact = (changedContact: contact, contactNumber: number) => {
  return {
    payload: {
      contactIndex: contactNumber,
      contact: changedContact
    },
    type: contactTypes.EDIT_CONTACT
  };
};
