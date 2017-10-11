import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './App'
import devToolsEnhancer from 'remote-redux-devtools';

let store = createStore(todoApp, devToolsEnhancer())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)