import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

/** 1st argument is current todos state and 2nd is info from state about current visibilityFilter*/
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            /** show those todos where completed prop is TRUE*/
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            /** toggleTodo is an action creator. ONLY return object */
            /** dispatch provide the ACTION to reducer. REDUCER base on conditional algorithm
             *  recognize type of action and reduce state. In this case It filters through whole
             *  todos object and if _todo.id === action.id then toggle _todo.completed on opposite */
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList