import { initialState, globalReducer } from "../reducer/global-reducer";
import { contactListTypes } from "../action/contact-list/contact-list-types";
// import { contactTypes } from "../action/contact/contact-types";
import contact from "../model/contact";
import { contactTypes } from "../action/contact/contact-types";

// get new initial state for each test
// const reset = () => {
//   return JSON.parse(JSON.stringify(initialState));
// };
describe("Global reducer", () => {
  let state: typeof initialState;
  beforeAll(() => {
    state = initialState;
  });
  it("Selects contacts to be displayed on the screen", () => {
    expect(
      globalReducer(state, {
        payload: {
          currentContact: new contact(
            "bill",
            "is a swell guy",
            "email@mail.com",
            "828-943-2345"
          ),
          contactIndex: 0
        },
        type: contactListTypes.SELECT_CONTACT
      })
    ).toEqual({
      ...initialState,
      currentContact: new contact(
        "bill",
        "is a swell guy",
        "email@mail.com",
        "828-943-2345"
      ),
      contactIndex: 0
    });
  });
  it("clears the contact information", () => {
    expect(
      globalReducer(state, {
        payload: {},
        type: contactTypes.CLEAR_CONTACT
      }).currentContact
    ).toEqual(new contact("", "", "", ""));
  });
});
