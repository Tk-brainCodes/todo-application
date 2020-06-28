import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './todoList';
import TodoForm from './todoForm';
import uuid from 'uuid/v4';

function TodoApp(){
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
    //create todos and set a function for update 'setTodos' the "setState"
    const [todos, setTodos] = useState(initialTodos);

    //adds new todos to the form
    const addTodo = addNewTodo => {
        setTodos([...todos, {id: uuid(), task: addNewTodo, completed: false}]);
    }

    const removeTodo = todoId => {
        //filter out removed todo
        const updatedTodo = todos.filter(todo => todo.id !== todoId);
        //call setTodo with new todo array
        setTodos(updatedTodo);
    }

    //for the checkbo
   const toggleTodo = todoId => {
       const updatedTodo = todos.map(todo => 
           todo.id === todoId ? {...todo, completed: !todo.completed} : todo
       );
       setTodos(updatedTodo);
   };
    //for editing the todo
    const editTodo = (todoId, newTask) => {
        const updateTodo = todos.map(todo => 
            todo.id === todoId ? {...todo, task: newTask} : todo
            )
            setTodos(updateTodo);
    }
    //useEffect for localStorage
    useEffect(() => {
          //localStorage
          window.localStorage.setItem("todos", JSON.stringify(todos));
        document.title = `Todo App`;
    }, [todos])
    return ( 
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }} elevation={0}>

        <AppBar color="primary" position="static" style={{height: "64px"}}>
            <ToolBar>
                <Typography color="inherit">
                    TODOS WITH HOOKS
                </Typography>
            </ToolBar>
        </AppBar>
        <Grid container justify="center" style={{marginTop: "1rem"}}>
          <Grid item xs={11} mg={8} lg={4}>
          <TodoForm addTodo={addTodo}/>
          <TodoList 
          todos={todos} 
           removeTodo={removeTodo}
           toggleTodo={toggleTodo}
           editTodo={editTodo}
           />
          </Grid>
        </Grid>
        </Paper>
    );
}
export default TodoApp;