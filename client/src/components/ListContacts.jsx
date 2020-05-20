import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


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
                <div className='contactDisplay'>

                    {
                        this.state.contactArray.map((contact) => {
                            return (
                                <div key={contact._id} className='display' >
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Img variant="top" src="../avatar5.png" />
                                        <Card.Body>
                                            <Card.Title> 
                                                <p><span>Name:</span> {contact.contactName}</p>
                                            </Card.Title>
                                            <Card.Text>
                                                <p>{contact.contactEmail}</p>
                                            </Card.Text>
                                            <Button variant="secondary"><Link to={`/view/${contact.contactName}`}  className='detailButton'>Details </Link></Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default ListContacts;