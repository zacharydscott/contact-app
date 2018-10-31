import * as React from "react";
import "./App.css";
import ContactList from "./component/screen/contact-list/contact-list";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewContact from "./component/screen/view-contact/view-contact";
import NewContact from "./component/screen/new-contact/new-contact";
import EditContact from "./component/screen/edit-contact/edit-contact";
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} path="/" component={ContactList} />
            <Route path="/new-contact" component={NewContact} />
            <Route path="/view-contact" component={ViewContact} />
            <Route path="/edit-contact" component={EditContact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
