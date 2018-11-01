import * as React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import contact from "../model/contact";
import { selectContact } from "../action/contact-list/contact-list-actions";
import ConnectCL from "../component/screen/contact-list/contact-list";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { ListItem, Button } from "../../node_modules/@material-ui/core";

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
    selectContact
  }
});

describe("contact list component", () => {
  it("renders", () => {
    const wrapper = shallow(<ConnectCL store={store} />);
    expect(wrapper).toHaveLength(1);
  });
  it("can select a contact", () => {
    const cl = mount(<ConnectCL store={store} />);

    expect(cl.find(ListItem)).toHaveLength(1);
  });
  it("can navigate to new page from add contact button", () => {
    const cl = mount(<ConnectCL store={store} />);
    expect(cl.find(Button)).toHaveLength(1);
  });
});
