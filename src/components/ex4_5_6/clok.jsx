import React from 'react';

const Clock = (props) => {

    const stateDate = {
        fecha: new Date(),
        edad: 10,
        nombre: 'Alberto',
        apellidos: 'Bitonti'
    }; 

    return (
        <div>
            <div>
                <h2>
                Hora Actual:
                {stateDate.fecha.toLocaleTimeString()}
                </h2>stateDate
                <h3>{stateDate.nombre} {stateDate.apellidos}</h3>
                <h1>Edad: {stateDate.edad}</h1>
            </div>
        </div>
    );
}
export default Clock; 