import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../../reducer/comb";
import contact from "../../../model/contact";
import { saveContact } from "../../../action/contact/contact-actions";
import { RouteComponentProps } from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import SaveIcon from "@material-ui/icons/Save";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
// import { clearContact } from "../../../action/contact/contact-actions";
// import AddIcon from "@material-ui/i"
/**
 * This is the screen which displays the contacs, serving as a container
 * for the contact list, and the option to add a new user
 */

interface IProps extends RouteComponentProps<any> {
  contactList: contact[];
  errorMessgae: string;
  contactIndex: number;
  currentContact: contact;
  clearContact: () => any;
  saveContact: (newContact: contact) => any;
}

class NewContact extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      bio: "",
      phone: "",
      email: ""
    };
  }
  public changeName = (e: any) => {
    this.setState({ name: e.target.value });
  };
  public changeBio = (e: any) => {
    this.setState({ bio: e.target.value });
  };
  public changePhone = (e: any) => {
    this.setState({ phone: e.target.value });
  };
  public changeEmail = (e: any) => {
    this.setState({ email: e.target.value });
  };
  public saveContact = (e: any) => {
    this.props.saveContact(
      new contact(
        this.state.name,
        this.state.bio,
        this.state.email,
        this.state.phone
      )
    );
    this.props.history.push("/");
  };
  public componentDidMoun() {
    this.props.clearContact();
  }
  public render() {
    return (
      <div>
        <h1>Add Contact</h1>
        <FormControl aria-describedby="contact name">
          <InputLabel>Name</InputLabel>
          <Input
            aria-label="name input"
            value={this.state.name}
            onChange={this.changeName}
          />
        </FormControl>
        <br />
        <FormControl aria-describedby="contact bio">
          <InputLabel>Bio</InputLabel>
          <Input
            aria-label="bio input"
            value={this.state.bio}
            onChange={this.changeBio}
          />

          <FormHelperText>short snippet about this person</FormHelperText>
        </FormControl>
        <br />
        <FormControl aria-describedby="contact phone">
          <InputLabel>Phone</InputLabel>
          <Input
            aria-label="phone input"
            value={this.state.phone}
            onChange={this.changePhone}
          />

          <FormHelperText>enter a valied phone number</FormHelperText>
        </FormControl>
        <br />
        <FormControl aria-describedby="contact email">
          <InputLabel>Email</InputLabel>
          <Input
            aria-label="email input"
            value={this.state.email}
            onChange={this.changeEmail}
          />
          <FormHelperText>enter a valied email</FormHelperText>
        </FormControl>

        <br />
        <Button variant="contained" size="small" onClick={this.saveContact}>
          Save
          <SaveIcon />
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state: IState) => {
  return {
    contactList: state.contactList.contactList,
    errorMessage: state.global.errorMessage,
    contactIndex: state.global.contactIndex
    // currentContact: state.global.currentContact
  };
};

const mapDispatchToProps = {
  saveContact
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewContact);
