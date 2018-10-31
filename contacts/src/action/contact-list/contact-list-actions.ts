import { contactListTypes } from "./contact-list-types";
import contact from "../../model/contact";
export const selectContact = (
  selectedContact: contact,
  contactNumber: number
) => {
  window.console.log("from action");
  window.console.log(selectedContact);
  return {
    payload: {
      currentContact: selectedContact,
      contactIndex: contactNumber
    },
    type: contactListTypes.SELECT_CONTACT
  };
};
