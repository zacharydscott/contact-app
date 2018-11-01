import configureStore from "redux-mock-store";
import * as actions from "../../action/contact/contact-actions";
import { contactTypes } from "../../action/contact/contact-types";
import contact from "../../model/contact";
const mockStore = configureStore();
const store = mockStore();
describe("contact actions", () => {
  beforeAll(() => {
    beforeEach(() => {
      store.clearActions();
    });
  });
  it("dispatches clear contact correctly", () => {
    store.dispatch(actions.clearContact());
    expect(store.getActions()[0]).toEqual({
      payload: {},
      type: contactTypes.CLEAR_CONTACT
    });
  });
  it("dispatches delete contact correctly", () => {
    store.dispatch(actions.deleteContact(135));
    expect(store.getActions()[0]).toEqual({
      payload: { contactIndex: 135 },
      type: contactTypes.DELETE_CONTACT
    });
  });
  it("dispatches save contact correctly", () => {
    store.dispatch(
      actions.saveContact(
        new contact(
          "test contact",
          "a good guy",
          "828-234-3244",
          "place@email.com"
        )
      )
    );
    expect(store.getActions()[0]).toEqual({
      payload: {
        contact: new contact(
          "test contact",
          "a good guy",
          "828-234-3244",
          "place@email.com"
        )
      },
      type: contactTypes.SAVE_CONTACT
    });
  });

  it("edits contacts correctly", () => {
    store.dispatch(
      actions.editContact(
        new contact(
          "test contact",
          "a good guy",
          "828-234-3244",
          "place@email.com"
        ),
        135
      )
    );
    expect(store.getActions()[0]).toEqual({
      payload: {
        contact: new contact(
          "test contact",
          "a good guy",
          "828-234-3244",
          "place@email.com"
        ),
        contactIndex: 135
      },
      type: contactTypes.EDIT_CONTACT
    });
  });
});
