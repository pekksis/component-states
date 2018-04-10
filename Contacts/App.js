import ReactDOM from 'react-dom';
import React from 'react';
import ContactList from './ContactList';



  let contacts =
    [{
      name: 'Dr. Watson',
      phone: '911-112-999',
      address: '221B Baker street'
    },
    {
      name: 'Sherlock Holmes',
      phone: '999-999-9999',
      address: '221B Baker street'
    },
    {
      name: 'John Doe',
      phone: '123-123-123',
      address: 'Abbey Road'
    },
    {
      name: 'Jane Doe',
      phone: '000-111-2222',
      address: '???'
    }
  ];

//We call the App with the contact information we defined in line 329.
//We want to create list of contacts with this information so we pass the
//contacts variable to App component
  ReactDOM.render(<App contacts={contacts}/>,
                document.getElementById('root'));


  //App component passes on the contacts props it received from ReactDOM.render
  //to ContactList component. We can imagine if App received multiple different
  //prop types, it would send them to the corresponding components.
  class App extends React.Component{

    render(){
      console.log(this.props);
      return (
        <div>
          <h2>List of contacts</h2>
          <ContactList contacts = {this.props.contacts}/>
        </div>
      );
    }
  }
