import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ViewContact from './ViewContact';
import ListContacts from './ListContacts';
import AddContact from './AddContact';
import EditContact from './EditContact';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactForm: false,
        }
    }

    addNewContact = (event) => {
        this.setState(
            {
                contactForm: true
            }
        )
    }

    render() {
        let displayForm =
            <Router>
                <Link to='/'>Home</Link>
                <h1>Contacts</h1>
                <button onClick={this.addNewContact}>Add New Contact</button>
                <br />
                <Route exact path='/' component={ListContacts} />
                <Route path='/:contactName' component={ViewContact} />
                <Route exact path={`/edit/:contactName`} component={EditContact}></Route>
            </Router>

        if (this.state.contactForm) {
            displayForm =
                <div>
                    <Router>
                        <Link to='/'>Home</Link>
                    </Router>
                    <AddContact />
                </div>
        }
        return (
            <div>

                <div>
                    {displayForm}
                </div>
            </div>
        );
    }
}

export default AppContainer;