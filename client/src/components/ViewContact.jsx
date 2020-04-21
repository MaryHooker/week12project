import React, { Component } from 'react';

class ViewContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                contactName: '',
                contactNumber: 0,
                contactEmail: '',
                contactDetails: '',
            },
        }
    }

    //When component mounts fetch the detials
    componentDidMount() {
        this.loadData();
    }

    //This method will fetch all items
    loadData = async () => {
        //fetch documents from database
        let response = await fetch(`/api/${this.props.match.params.contact_name}`);
        //sanity
        console.log(response);
        let json = await response.json();
        //sanity
        console.table(json);
        //place imported json in array
        this.setState({ contact: json })//should be one item

    }


    editContact = () => {

    }

    deleteContact = () => {

    }

    render() {
        return (
            <div className='detailsDisplay'>
                <h2>Details on {this.props.match.params.contact_name}</h2>
                <p><span>Name:</span> {this.state.contact.contactName}</p>
                <p><span>Email:</span> {this.state.contact.contactEmail}</p>
                <p><span>Number:</span> {this.state.contact.contactNumber}</p>
                <p><span>Details:</span> {this.state.contact.contactDetails}</p>
                <button onClick={this.editContact}>Edit</button>
                <button onClick={this.deleteContact}>Delete</button>
                <hr />
            </div>
        )
    }
}

export default ViewContact;