import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function EditForm({editTodo,id,task,toggleEdit}){
    const [value,handleChange,reset] = useInputState(task);
   return(
    <form onSubmit={(e) => {
        e.preventDefault();
        editTodo(id,value);
        reset();
        toggleEdit();
    }} style={{marginLeft: "1rem", width: '100%'}}>
           <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
       />
    </form>
   )

}
export default EditForm;