import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ComponentB = ({ contact }) => {
    return (
    <div>
        <h1>
            Name : { contact.name }
        </h1>
        <h2>
            Surname : { contact.surName }
        </h2>
        <h3>
            Email : { contact.email }
        </h3>
        <h5>
            This contact is: { contact.conected ? 'Contacto En Línea' : ' Contacto No Disponible'}
        </h5>
    </div>
    );
};

ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};

export default ComponentB;
