import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          /** No submit if no value */
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          /**after dispatch action set again empty input */
          input.value = '';
        }} >  
        <input
          ref={node => { input = node }} />
        <button type="submit">Add todo</button>  
      </form>
    </div>
  )
}

addTodo = connect()(AddTodo);

export default AddTodo;