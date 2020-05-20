import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewContact extends Component {
    constructor(props) {
        super(props);
        this.state = {

            contactName: '',
            contactNumber: 0,
            contactEmail: '',
            contactDetails: '',

        }
    }

    //When component mounts fetch contact details
    componentDidMount() {
        this.loadData();
    }

    //This method will fetch a specific contact
    loadData = async () => {
        //fetch documents from database
        let response = await fetch(`/api/view/${this.props.match.params.contactName}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let json = await response.json();

        //place imported json in array
        this.setState({
            contactName: json.contactName,
            contactNumber: json.contactNumber,
            contactEmail: json.contactEmail,
            contactDetails: json.contactDetails
        })
        //sanity
        console.table(`Viewing Contact ${JSON.stringify(this.state)}`);

    }

    deleteContact = async() => {

        //Send your delete request through fetch/specify method
       let response = await fetch(`/api/delete/${this.props.match.params.contactName}`,
            {
                method: 'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            });

        let json = await response.json();
        //sanity
        console.log(`Deleting ${JSON.stringify(json)}`)
        //redirect to root site
        window.location = '/'

    }

    render() {

        return (
            <div>
                <div className='detailsDisplay'>
                    <br/>
                    <h4><span>Details</span></h4>
                    <br/>
                    <p><span>Name:</span> {this.state.contactName}</p>
                    <p><span>Email:</span> {this.state.contactEmail}</p>
                    <p><span>Number:</span> {this.state.contactNumber}</p>
                    <p><span>Details:</span> {this.state.contactDetails}</p>
                    <Link to={`/edit/${this.state.contactName}`}><button >Edit</button></Link>
                    <button onClick={this.deleteContact} >Delete</button>
                </div>

            </div>
        )
    }
}

export default ViewContact;