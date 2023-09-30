import React, { Component } from 'react';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import './App.css';

class App extends Component {
  state = {//This is where the component's initial state is defined. In this case, todos is an array of objects representing individual todo items. Each todo has an id, title, and completed property.
    todos: [
      {
        id: 1,
        title: 'Learn React',
        completed: false
      },
      {
        id: 2,
        title: 'Build a To-Do App',
        completed: false
      },
      {
        id: 3,
        title: 'Have Fun!',
        completed: false
      }
    ]
  };
  markComplete = (id) => {
    this.setState({ //this.setState() is used to update the component's state. It's a method provided by React to update the state and re-render the component.
      //you're updating the todos property.
      todos: this.state.todos.map(todo => {//This is using Array.prototype.map to create a new array with the same number of items as todos, but with each item potentially transformed.
      if (todo.id === id){ //This checks if the id of the current todo matches the id that was passed as an argument to the function.
        todo.completed = !todo.completed;// flipping the value of completed. If it was true, it makes it false, and if it was false, it makes it true.
      }
      return todo;
      })
    });
  }

  deleteTodo = (id) => {
    this.state({
      todos: [...this.state.todos.filter(todo => todo.id !==id)]//: This uses Array.prototype.filter to create a new array that only includes todos where the id does not match the id that was passed as an argument to the function. This effectively removes the todo with the matching ID.
    //The spread operator (...) is used to create a new array. This is done to ensure that you're not modifying the original state directly.
    });
  }

  render() {
    return (
      <div>
      <Header />
      <Todos
      todos = {this.state.todos}
      markComplete= {this.markComplete}
      deleteTodo={this.deleteTodo}
      />
      <Footer />
      </div>
    );
  }
}
export default App;
