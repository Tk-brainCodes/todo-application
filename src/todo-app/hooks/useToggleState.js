import React, {useState} from 'react';

function useToggle({initialValue = false}){
    const [state, setState] = useState(initialValue);
    const handleToggle = () => {
        setState(!state);
    };
    return[state, setState];
}
export default useToggle;