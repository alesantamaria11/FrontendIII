import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Alejandra');

    function showMessage(text){
        alert(`Message received: ${text}`)
    }

    function updateName(newName){
        setName(newName)
    }

    return (
        <div style={{background: 'tomato', padding: '15x'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
