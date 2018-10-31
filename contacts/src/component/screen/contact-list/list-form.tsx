import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import contact from "../../../model/contact";
import * as React from "react";

export const ListForm = (
  contactList: contact[],
  history: any,
  selectContact: (selectedContact: contact, contactNumber: number) => any
) => {
  let key: number = 0;
  function selectContactor(cont: contact, keyVal: number) {
    return (e: any) => {
      selectContact(cont, keyVal);
      history.push("/view-contact");
    };
  }
  if (contactList.length !== 0) {
    return (
      <List>
        {contactList.map((rowContact: contact) => {
          key++;
          return (
            <ListItem
              key={key}
              dense={true}
              button={true}
              onClick={selectContactor(rowContact, key)}
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
    );
  } else {
    return (
      <List>
        <ListItem>
          <p aria-label="You have no contacts, navigate to the below button to get started.">
            You have no contacts, click the add button below to get started.
          </p>
        </ListItem>
      </List>
    );
  }
};
export default ListForm;
