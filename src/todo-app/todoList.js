import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './todofunc';
function TodoList({todos, removeTodo,id,toggleTodo,editTodo}){
    if(todos.length)
    return(
      <Paper>
          <List>
              {/*map through the todos and create a list for each*/}
          {todos.map((todo,i) => (
          <> 
           <Todo
           id={todo.id}
            task={todo.task}
             key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
               />
           {i < todo.length -1 && <Divider/>}
          </>
       ))}
          </List>
      </Paper>
    );
    return null;
}
export default TodoList;