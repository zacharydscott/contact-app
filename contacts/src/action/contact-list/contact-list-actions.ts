import { contactListTypes } from "./contact-list-types";
import contact from "../../model/contact";
export const selectContact = (
  selectedContact: contact,
  contactNumber: number
) => {
  return {
    payload: {
      currentContact: selectedContact,
      contactIndex: contactNumber
    },
    type: contactListTypes.SELECT_CONTACT
  };
};
