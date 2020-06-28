import React, {Component} from 'react';
import TodoApp from './todo-app/todo';
import SWMovies from './Starwar/starwar';
import Section from './Demo/Section';
import Navbar from './Demo/Navbar';
import About from './Demo/About';
import Skills from './Demo/Skills';
import './Demo/navbar.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/*
               <Navbar />
        <Section
          id="section1"
        />
        <About
          id="About"
        />
        <Skills id ="Skills"/>

       */}
       <TodoApp/>
      </div>
    );
  }
}

export default App;
