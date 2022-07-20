import React from 'react';
import './contact.css'; 


const Contact = ({ item, onDelete }) => {

    // ** new component to use here
    const NewContact = () => {
        return (
            <div>
            { item.contactName }
            <button className="button-delete"
            onClick={ (e) => 
            onDelete(item.id) } > Delete</button>
            </div>
        );
    }

    return (
        <div>
        {/*is a component function that i used only in this componnet i dont wanna export */}
        { <NewContact></NewContact> }
        </div>
    );
}

export default Contact;
