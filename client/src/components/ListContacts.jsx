import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';


class ListContacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactArray: [],
        }
    }

    componentDidMount() {
        this.loadData();
    }

    //fetch documents from database
    loadData = async () => {
        let response = await fetch('/api');
        //sanity
        console.log(response);
        let json = await response.json();
        //sanity
        console.table(json);
        //place imported json in array
        this.setState({ contactArray: json })
      
    }

    render() {
        return (
            <div>
                <div>
                <Link to='/add'><Button>Add New Contact</Button></Link>
                </div>
                {
                    this.state.contactArray.map((contact) => {
                        return (
                            <div key={contact._id} className='display'>
                                <p><span>Name:</span> 
                                <Link to={`/view/${contact.contactName}`}>
                                    {contact.contactName}
                                </Link>
                                </p>
                                <p><span>Email:</span> {contact.contactEmail}</p>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default ListContacts;