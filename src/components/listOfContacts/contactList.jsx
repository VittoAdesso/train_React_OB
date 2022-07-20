import React, { useState } from 'react';
import Contact from './contact';

import './contact.css'; 

const ContactList = () => {
    const [contactName, setContactName] = useState(""); // single contact
    const [allContacts, setAllContacts] = useState([]);  // want all contacts in array

    const handleChanged = (e) => {
        const value = e.target.value
        setContactName(value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newContact = {
            id: crypto.randomUUID(), // generate random id 
            contactName: contactName,
            completed: false,
        };

        // create a temp var 
        const temp = [...allContacts];  // copy the array
        temp.unshift(newContact); // insert first contact on top
        setAllContacts(temp); // give a new valor to the array 
        setContactName(""); // to have empty input // setter
    }; 
    
    // ** DELETE
    const handleDelete = (id) => {
        const contactDelete = allContacts.filter((item) => item.id !== id); 
        setAllContacts(contactDelete);
    };
        
    return (
        <div >
            <form onSubmit={handleSubmit} >
                <input 
                className="input-newContact"
                onChange={handleChanged} 
                value={contactName}/>
                <input 
                className="button-register"
                onClick={handleSubmit}
                type="submit"
                value="Register"/>
            </form>

            <div>
                { allContacts.map((item, index) => (
                    <Contact
                    key={index} //UNIQUE
                    item={item} //POSITION
                    onDelete={handleDelete}>
                    </Contact> //item have a prop & ondelete
                ))}
            </div>
        </div>
    );
}


export default ContactList;