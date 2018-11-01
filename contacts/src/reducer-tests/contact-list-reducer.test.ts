import {
  contactInitialState,
  contactListReducer
} from "../reducer/contact-list-reducer";
import { contactTypes } from "../action/contact/contact-types";
import contact from "../model/contact";

// produce new initial states for each test
const reset = () => {
  return JSON.parse(JSON.stringify(contactInitialState));
};
describe("contactListReducer", () => {
  it("has initial state", () => {
    expect(contactListReducer(undefined, { blank: "" })).toBeTruthy();
  });
  it("adds contacts when the add contact is disptached", () => {
    expect(
      contactListReducer(reset(), {
        payload: {
          contact: new contact("", "", "", "")
        },
        type: contactTypes.SAVE_CONTACT
      }).contactList
    ).toHaveLength(1);
  });
  it("Edits contacts properly when called", () => {
    const state = reset();
    contactListReducer(state, {
      payload: {
        contact: new contact("", "", "", "")
      },
      type: contactTypes.SAVE_CONTACT
    });
    expect(
      contactListReducer(state, {
        payload: {
          contact: new contact("new", "new", "new", "new"),
          contactIndex: 0
        },
        type: contactTypes.EDIT_CONTACT
      }).contactList
    ).toEqual([new contact("new", "new", "new", "new")]);
  });

  it("Deletes contacts correctly", () => {
    const state = reset();
    contactListReducer(state, {
      payload: {
        contact: new contact("1", "1", "1", "1")
      },
      type: contactTypes.SAVE_CONTACT
    });
    contactListReducer(state, {
      payload: {
        contact: new contact("2", "2", "2", "2")
      },
      type: contactTypes.SAVE_CONTACT
    });
    expect(
      contactListReducer(state, {
        payload: {
          contactIndex: 0
        },
        type: contactTypes.DELETE_CONTACT
      }).contactList
    ).toEqual([new contact("2", "2", "2", "2")]);
  });
  it("sorts contacts alphabetically after one is saved", () => {
    const state = reset();
    contactListReducer(state, {
      payload: {
        contact: new contact("z", "a", "a", "a")
      },
      type: contactTypes.SAVE_CONTACT
    });
    contactListReducer(state, {
      payload: {
        contact: new contact("c", "b", "b", "b")
      },
      type: contactTypes.SAVE_CONTACT
    });
    contactListReducer(state, {
      payload: {
        contact: new contact("b", "c", "c", "c")
      },
      type: contactTypes.SAVE_CONTACT
    });
    expect(state).toEqual({
      contactList: [
        new contact("b", "c", "c", "c"),
        new contact("c", "b", "b", "b"),

        new contact("z", "a", "a", "a")
      ]
    });
  });

  it(`has proper functionality when no relevant action is dispensed `, () => {
    const state = reset();
    contactListReducer(reset(), {
      payload: {
        contact: new contact("1", "1", "1", "1")
      },
      type: contactTypes.SAVE_CONTACT
    });
    const newState = contactListReducer(state, {
      payload: {
        contact: new contact("1", "1", "1", "1")
      },
      type: "nothing important"
    });
    expect(newState).toEqual(state);
  });
});
