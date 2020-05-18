import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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

    //When component mounts fetch contact details
    componentDidMount() {
        this.loadData();
    }

    //This method will fetch a specific contact
    loadData = async () => {
        //fetch documents from database
        let response = await fetch(`api/view/${this.props.match.params.contactName}`);
      
        let json = await response.json();
        //sanity
        console.table(`Viewing Contact ${JSON.stringify(json)}`);
        //place imported json in array
        this.setState({ contact: json })//should be one item

    }

    // deleteContact = () => {

    //     //Send your delete request through fetch/specify method
    //     fetch(`/api/${this.state.contact.contactName}`,
    //         {
    //             method: 'DELETE'
    //         });
    //     console.log(`Deleted it!`);
    //     //redirect to root site
    //     window.location = '/'

    // }

    render() {
                
        return (
          <div>
                  <div className='detailsDisplay'>
                <p><span>Name:</span> {this.state.contact.contactName}</p>
                <p><span>Email:</span> {this.state.contact.contactEmail}</p>
                <p><span>Number:</span> {this.state.contact.contactNumber}</p>
                <p><span>Details:</span> {this.state.contact.contactDetails}</p>
                <Link to={`/edit/${this.state.contact.contactName}`}><button className='detailButton'>Edit</button></Link>
                {/* <button onClick={this.deleteContact} className='detailButton'>Delete</button> */}
            </div>

          </div>
        )
    }
}

export default ViewContact;