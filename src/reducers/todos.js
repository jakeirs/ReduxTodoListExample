const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            /** sprawdź wszystkie TaskTodo i ich id, jeśli ID === ID action
             * to descruture ntodo object i zamień ntodo.completed na przeciwną wartość,
             * w przeciwnym wypadku pozostaw obiekt bez zmian.*/
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        default:
            return state
    }
}

export default todos