import React, {useState} from 'react';

export default initialInterval => {
    const [value, setValue] = useState(initialInterval);
    const handleChange = e => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    }; 

    return [value, handleChange, reset];
};