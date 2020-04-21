import React, { Component } from 'react';

class ViewContact extends Component {
    constructor(props) {
        super(props);
        this.state = {

            contactArray:[],
        }
    }

    

    editContact = () => {

    }

    deleteContact = () => {

    }
    
    render() {
        return (
            <div>
                <h2>Details</h2>
                {
                    this.props.contactArray.map((contact) => {
                        return (
                            <div key={contact._id} className='detailsDisplay'>
                                <p><span>Name:</span> {contact.contactName}</p>
                                <p><span>Email:</span> {contact.contactEmail}</p>
                                <p><span>Number:</span> {contact.contactNumber}</p>
                                <p><span>Details:</span> {contact.contactDetails}</p>
                                <button onClick={this.editContact}>Edit</button>
                                <button onClick={this.deleteContact}>Delete</button>
                                <hr/>
                            </div>
                        )
                    }
                    )
                }
            </div>
        )
    }
}

    export default ViewContact;