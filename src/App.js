import React, { Component } from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

/** Presentational Components */
/*** TodoList (array) of todos {id, text, completed}
 * onTodoClick(id: number)
 *** nToDo text, completed: boolean is whether todo should appear
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
const App = () => (
    <div>
         <AddTodo />
         <VisibleTodoList />
         <Footer />
    </div>
)

export default App;

/**
 * Technically, a container component is just React component
 * that uses 'store.subscribe()' to read a part of the Redux state tree
 * and supply props to a presentational compoents it renders.
 * You could write a container by hand. We suggest instead generating
 * container components with the React Redux library's 'CONNECT'.
 * OPTIMALIZATION. PREVENT UNNECESSARY RE-RENDERS. 
 */