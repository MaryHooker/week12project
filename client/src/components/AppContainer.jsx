import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import ViewContact from './ViewContact';
import ListContacts from './ListContacts';

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
                <Link to='/' className='homeLink'>Home</Link> 
                <h1>Contacts</h1>
                <button onClick={this.addNewContact}>Add New Contact</button>
                <br/>
                <Route exact path='/' component={ListContacts}/>
                <Route exact path='/:contact_name' component={ViewContact}/>
                </Router>
            </div>
        );
    }
}

export default AppContainer;