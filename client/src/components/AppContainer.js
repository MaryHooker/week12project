import React, { Component } from 'react';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactName: '',
            contactNuber: 0,
            contactEmail: '',
            contactArray: [],
            contactForm: false,

        }
    }

    //When page loads, run method that pulls in Database
    componentDidMount = () => {

        this.loadData();

    }

    //When Add New Contact button is clicked, display form
    addNewContact = () => {
        this.setState(
            {
                contactForm: true
            }
        )
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

    handleInputs = (event) => {
        if (event.target.name === 'name') {
            this.setState({ contactName: event.target.value })
        } else if (event.target.name === 'number') {
            this.setState({ contactNumber: event.target.value })
        } else if (event.target.name === 'email') {
            this.setState({ contactEmail: event.target.value })
        }
    }

    //When Submit button is pressed in Add Contact form
    handleSubmission = async (event) => {
        event.preventDefault();

        //what allows us to send json data
        let formData = {
            contactName: this.state.contactName,
            contactNumber: this.state.contactNumber,
            contactEmail: this.state.contactEmail,
        }
        console.log(JSON.stringify(formData))
        let response = await fetch('/api', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        let json = await response.json();
        //sanity
        console.log(json);

        //clear form
        this.setState(
            {
                contactName: '',
                contactNumber: 0,
                contactEmail: '',
            }
        )

        this.setState(
            {
                contactForm:false
            }
        )

    }

    render() {
        let form;

        if (this.state.contactForm) {
            form = <div>
                <label htmlFor="name">Name:</label>
                <br />
                <input type="text" name='name' id='name' value={this.state.contactName} onChange={this.handleInputs} />
                <br />
                <label htmlFor="number">Phone Number:</label>
                <br />
                <input type="number" name='number' id='number' value={this.state.contactNumber} onChange={this.handleInputs} />
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <input type="price" name='email' id='email' value={this.state.contactEmail} onChange={this.handleInputs} />
                <br />
                <button onClick={this.handleSubmission}>Submit</button>
            </div>
        }
        return (
            <div>
                <h1>Contacts App</h1>
                <button onClick={this.addNewContact}>Add New Contact</button>
                <div>
                    {form}
                </div>

                <div>
                    {
                        this.state.contactArray.map((contact) => {
                            return (
                                <div key={contact._id} className='display'>
                                    <p><span>Name:</span> {contact.contactName}</p>
                                    <p><span>Number:</span> {contact.contactNumber}</p>
                                    <p><span>Email:</span> {contact.contactEmail}</p>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default AppContainer;