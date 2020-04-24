import React, { Component } from 'react';
import EditContact from './EditContact';

class ViewContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                contactName: '',
                contactNumber: 0,
                contactEmail: '',
                contactDetails: '',
                editForm: false,
            },
        }
    }

    //When component mounts fetch the detials
    componentDidMount() {
        this.loadData();
    }

    //This method will fetch specific items
    loadData = async () => {
        //fetch documents from database
        let response = await fetch(`api/${this.props.match.params.contactName}`);
        //sanity
        console.log(response);
        let json = await response.json();
        //sanity
        console.table(json);
        //place imported json in array
        this.setState({ contact: json })//should be one item

    }


    editContact = () => {
        this.setState(
            {
                editForm: true
            }
        )
    }

    deleteContact = (event) => {

        //Send your delete request through fetch/specify method
        fetch(`/api/${this.state.contact.contactName}`,
            {
                method: 'DELETE'
            });
        console.log(`Deleted it!`);
        //redirect to root site
        window.location = '/'

    }

    render() {
        let display =
            <div className='detailsDisplay'>
                <h2>Details on {this.props.match.params.contact_name}</h2>
                <p><span>Name:</span> {this.state.contact.contactName}</p>
                <p><span>Email:</span> {this.state.contact.contactEmail}</p>
                <p><span>Number:</span> {this.state.contact.contactNumber}</p>
                <p><span>Details:</span> {this.state.contact.contactDetails}</p>
                <button onClick={this.editContact} className='detailButton'>Edit</button>
                <button onClick={this.deleteContact} className='detailButton'>Delete</button>
            </div>

            if(this.state.editForm){
                display = <EditContact contactName = {this.state.contact.contactName} contactNumber = {this.state.contact.contactNumber} contactEmail = {this.state.contact.contactEmail} contactDetails = {this.state.contact.contactDetails}/>
            }
        return (
          <div>
              {display}
          </div>
        )
    }
}

export default ViewContact;