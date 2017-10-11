import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './App'
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(todoApp, composeWithDevTools())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)