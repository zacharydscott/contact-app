import * as React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import contact from "../model/contact";
import { selectContact } from "../action/contact-list/contact-list-actions";
import ViewContact from "../component/screen/view-contact/view-contact";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Button from "../../node_modules/@material-ui/core/Button/Button";

const mockStore = configureStore();
Enzyme.configure({ adapter: new Adapter() });

const store = mockStore({
  contactList: {
    contactList: [
      new contact(
        "test1",
        "interesting person",
        "email@email.com",
        "123-123-1234"
      )
    ]
  },
  global: {
    errorMessage: "",
    contactIndex: 0,
    selectContact,
    currentContact: new contact(
      "test1",
      "interesting person",
      "email@email.com",
      "123-123-1234"
    )
  }
});

describe("contact list component", () => {
  beforeEach(() => {
    store.clearActions();
  });
  it("renders", () => {
    const wrapper = shallow(<ViewContact store={store} />);
    expect(wrapper).toHaveLength(1);
  });
  it("can return, edit, and delete", () => {
    const comp = mount(<ViewContact store={store} />);
    expect(comp.find(Button)).toHaveLength(3);
  });
});
