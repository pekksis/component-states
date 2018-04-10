import React from 'react';
import Contact from './Contact';


//This component gets contacts props from App component.
//contacts contains 4 different contacts in an array.
//This component will call Contact component for each element in the array and
//send that contact information to the Contact component
class ContactList extends React.Component{

  render(){
    console.log(this.props.contacts);

    var elements = []; //Array that will contain Contact components

    //Looping through the Contact list and creating a new Contact component for each contact
    for(let i=0; i<this.props.contacts.length; i++){
      elements.push(<Contact contact = {this.props.contacts[i]}/>);
    }
    return(
      <div>{elements}</div>
    );
  }
}


export default ContactList;
