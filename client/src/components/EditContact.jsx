import React, { Component } from 'react';

class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactName: '',
            contactNumber: 0,
            contactEmail: '',
            contactDetails: '',
        }
    }

    //When component mounts fetch contact details to show what is being edited
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

    handleInputs = (event) => {
        if (event.target.name === 'name') {
            this.setState({ contactName: event.target.value })
        } else if (event.target.name === 'number') {
            this.setState({ contactNumber: event.target.value })
        } else if (event.target.name === 'email') {
            this.setState({ contactEmail: event.target.value })
        } else if (event.target.name === 'details') {
            this.setState({ contactDetails: event.target.value })
        }
    }


    //When Submit button is pressed in Edit Contact
    handleSubmission = async (event) => {
        event.preventDefault();

        //what allows us to send json data
        let formData = {
            contactName: this.state.contactName,
            contactNumber: this.state.contactNumber,
            contactEmail: this.state.contactEmail,
            contactDetails: this.state.contactDetails
        }

        console.log(JSON.stringify(formData))
        let response = await fetch(`/api/edit/${this.props.match.params.contactName}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        let json = await response.json();
        //sanity
        console.log(`Edit Comp ${json}`);

        //Redirect
        window.location = '/';

    }
    
    render() {
        return (
            <div>
                <label htmlFor="name">Name:</label>
                <br />
                <input type="text" name='name' id='name' value={this.state.contactName} onChange={this.handleInputs}/>
                <br />
                <label htmlFor="number">Phone Number:</label>
                <br />
                <input type="number" name='number' id='number' value={this.state.contactNumber} onChange={this.handleInputs}/>
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <input type="email" name='email' id='email' value={this.state.contactEmail} onChange={this.handleInputs}/>
                <br />
                <label htmlFor="details">Details:</label>
                <br />
                <textarea name="details" id="details" cols="30" rows="4" value={this.state.contactDetails} onChange={this.handleInputs}></textarea>
                <br />
                <button onClick={this.handleSubmission}>Submit</button>
            </div>
        );
    }
}

export default EditContact;
