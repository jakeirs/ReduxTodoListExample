let nextTodoId = 0
/** action: is an JS object:
 * {
 *  type: 'ADD_TODO'.
 *  text: 'Make a coffee'
 * }
 * */

/** Actions Creators: functions that create actions: */
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

/** responsible for changing todoTask between complete: true/false*/
export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}