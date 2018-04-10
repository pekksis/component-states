import React from 'react';

//This component accepts a contact prop with name, address and phone and returns
//JSX code where that information is stored.
class Contact extends React.Component{

  render(){
    console.log(this.props);
    return(
      <div>
        <h4>{this.props.contact.name}</h4>
        <p>{this.props.contact.address}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );
  }
}



export default Contact;
