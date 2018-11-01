import configureStore from "redux-mock-store";
import * as actions from "../../action/contact-list/contact-list-actions";
import { contactListTypes } from "../../action/contact-list/contact-list-types";
import contact from "../../model/contact";
const mockStore = configureStore();
const store = mockStore();
describe("contact actions", () => {
  beforeAll(() => {
    beforeEach(() => {
      store.clearActions();
    });
  });
  it("selects the correct contact from the list", () => {
    store.dispatch(
      actions.selectContact(
        new contact(
          "test contact",
          "a good guy",
          "828-234-3244",
          "place@email.com"
        ),
        15
      )
    );
    expect(store.getActions()[0]).toEqual({
      payload: {
        currentContact: new contact(
          "test contact",
          "a good guy",
          "828-234-3244",
          "place@email.com"
        ),
        contactIndex: 15
      },
      type: contactListTypes.SELECT_CONTACT
    });
  });
});
