import React from 'react';
import { Contact } from '../../models/contact.class';
import  ComponentB  from '../../components/componentB/componentB';

const ComponentA = () => {
    const newContact = new Contact( 'Antonio', 'Altilio', 'ant@msn.es', true);

    return (
        <div>
            <ComponentB contact= { newContact }></ComponentB>
            {/* <ComponentB></ComponentB> */}
        </div>
    );
};

export default ComponentA;

