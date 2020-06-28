import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from './hooks/useToggleState';
import EditForm from './editTodoForm';


function Todo({ id, task, completed, removeTodo, toggleTodo,editTodo }) {
    const [isEditing,toggle] = useToggleState(false);
    return (
        <ListItem style={{height: '64px'}}>
            {isEditing ? (<EditForm editTodo={editTodo} id={id} task={task} toggleEdit={toggle} />) : (
                <>
                <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                    {task}
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItemText>
                </>

            )}
        </ListItem>

    )
}
export default Todo;