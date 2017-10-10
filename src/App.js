import React, { Component } from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

/** Presentational Components */
/*** TodoList (array) of todos {id, text, completed}
 * onTodoClick(id: number)
 *** Todo text, completed: boolean is whether todo should appear
 *** Link: onClick is callback
 *** Footer: here user can change currently visible todos
 *** App: render everything else
 */

/** Container Components 
 * (to connect the presentational components to Redux)*/
/*** TodoList needs VisibleTodoList that subscribes to the Redux store 
 * and knows how to apply current visibility filter.
 * 
 *** FilterLink container: renders Link that dispatches actions on click
 * 
 * */ 

 /**Other components:
  *** AddTodo 
  */
class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
