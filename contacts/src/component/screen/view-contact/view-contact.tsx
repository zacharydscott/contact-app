import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../../reducer/comb";
import contact from "../../../model/contact";
import { saveContact } from "../../../action/contact/contact-actions";
import { RouteComponentProps } from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import EditIcon from "@material-ui/icons/Create";
import ReturnIcon from "@material-ui/icons/Undo";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField/TextField";
import { deleteContact } from "../../../action/contact/contact-actions";

/**
 * This is the screen which displays the contacs, serving as a container
 * for the contact list, and the option to add a new user
 */

interface IProps extends RouteComponentProps<any> {
  contactList: contact[];
  errorMessgae: string;
  contactIndex: number;
  currentContact: contact;
  deleteContact: (deleteNum: number) => any;
}

class NewContact extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }

  public editContact = (e: any) => {
    this.props.history.push("/edit-contact");
  };
  public deleteContact = (e: any) => {
    this.props.deleteContact(this.props.contactIndex);
    this.props.history.push("/");
  };
  public return = (e: any) => {
    this.props.history.push("/");
  };
  public render() {
    return (
      <div>
        <h1>View Contact</h1>
        <form className="header-buttons">
          <Button
            variant="fab"
            color="secondary"
            aria-label="Edit"
            onClick={this.editContact}
          >
            <EditIcon />
          </Button>
          <Button
            variant="fab"
            size="small"
            aria-label="return"
            onClick={this.return}
          >
            <ReturnIcon />
          </Button>
          <Button
            variant="fab"
            aria-label="Delete"
            onClick={this.deleteContact}
          >
            <DeleteIcon />
          </Button>
        </form>
        <form>
          <TextField
            label="Name"
            value={this.props.currentContact.name}
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            label="bio"
            value={this.props.currentContact.bio}
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            label="e-mail"
            value={this.props.currentContact.email}
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            label="phone"
            value={this.props.currentContact.phone}
            margin="normal"
            variant="outlined"
          />
          <br />
        </form>
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
  saveContact,
  deleteContact
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewContact);
