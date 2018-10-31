import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../../reducer/comb";
import contact from "../../../model/contact";
import Button from "@material-ui/core/Button/Button";
import { RouteComponentProps } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import AddIcon from "@material-ui/icons/Add";
import { selectContact } from "../../../action/contact-list/contact-list-actions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
/**
 * This is the screen which displays the contacs, serving as a container
 * for the contact list, and the option to add a new user
 */

interface IProps extends RouteComponentProps<any> {
  contactList: contact[];
  errorMessgae: string;
  contactIndex: number;
  selectContact: (selectContact: contact, contactNumber: number) => any;
}

class ContactListScreen extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }
  public newContact = (e: any) => {
    e.preventDefault();
    this.props.history.push("/new-contact");
  };
  public selectContact = (e: any) => {
    window.console.log(e.target.id);
    window.console.log(this.props.contactList[e.target.id]);
    this.props.selectContact(this.props.contactList[+e.target.id], e.target.id);
    this.props.history.push("/view-contact");
  };

  public render() {
    let key = -1;
    return (
      <div>
        <AppBar position="static">
          <h2>Contact App</h2>
        </AppBar>
        <List>
          {this.props.contactList.map((rowContact: contact) => {
            key++;
            return (
              <ListItem
                key={key}
                id={`${key}`}
                dense={true}
                button={true}
                onClick={this.selectContact}
              >
                <Avatar
                  alt="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-alien-monster.png"
                  src="https://ssl.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
                />
                <ListItemText primary={rowContact.name} />
              </ListItem>
            );
          })}
        </List>

        <Button
          variant="fab"
          color="primary"
          aria-label="Add Contact"
          onClick={this.newContact}
        >
          <AddIcon />
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
  };
};

const mapDispatchToProps = {
  selectContact
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListScreen);
