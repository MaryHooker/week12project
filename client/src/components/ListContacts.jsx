import React,{Component} from 'react';

class ListContacts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            contactArray:[],
         }
    }

    componentDidMount(){
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
                    {
                this.state.contactArray.map((contact) => {
                    return (
                        <div key={contact._id} className='display'>
                            <p><span>Name:</span> {contact.contactName}</p>
                            <p><span>Email:</span> {contact.contactEmail}</p>
                            <button onClick={this.showDetails} className='detailButton'>Details</button>
                            <hr/>
                        </div>
                    )
                })
            }
            </div>
         );
    }
}
 
export default ListContacts;