import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../../reducer/comb";
import contact from "../../../model/contact";
import { editContact } from "../../../action/contact/contact-actions";
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
  editContact: (newContact: contact, contactNumber: number) => any;
}

class NewContact extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: this.props.currentContact.name,
      bio: this.props.currentContact.bio,
      phone: this.props.currentContact.phone,
      email: this.props.currentContact.email
    };
  }
  public return = (e: any) => {
    this.props.history.push("/view-contact");
  };
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
    this.props.editContact(
      new contact(
        this.state.name,
        this.state.bio,
        this.state.email,
        this.state.phone
      ),
      this.props.contactIndex
    );
    this.props.history.push("/");
  };
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
            defaultValue={this.props.currentContact.name}
          />
        </FormControl>
        <br />
        <FormControl aria-describedby="contact bio">
          <InputLabel>Bio</InputLabel>
          <Input
            aria-label="bio input"
            value={this.state.bio}
            onChange={this.changeBio}
            defaultValue={this.props.currentContact.bio}
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
            defaultValue={this.props.currentContact.phone}
          />

          <FormHelperText>enter a valied phone number</FormHelperText>
        </FormControl>
        <br />
        <FormControl aria-describedby="contact email">
          <InputLabel>Email</InputLabel>
          <Input
            aria-label="email input"
            value={this.state.email}
            defaultValue={this.props.currentContact.email}
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
    contactIndex: state.global.contactIndex,
    currentContact: state.global.currentContact
  };
};

const mapDispatchToProps = {
  editContact
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewContact);
