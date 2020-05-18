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

        }
    }

    render() {

        return (
            <div>
                <Router>
                    <Link to='/'>Home</Link>
                    <h1>Contacts</h1>
                    <Route path='/' exact component={() => <ListContacts/>} />
                    <Route path='/add' exact component={() => <AddContact/>} />
                    <Route path='/view/:contactName' exact component={(props) => <ViewContact {...props}/>} />
                    <Route path='/edit/:contactName' exact component={(props) => <EditContact {...props}/>} />
                </Router>

            </div>
        );
    }
}

export default AppContainer;