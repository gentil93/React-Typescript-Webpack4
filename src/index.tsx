import * as React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as ReactDOM from 'react-dom'
import RegisterSW from './utils/registerSW'
import App from './main/app'
import reducers from './redux/reducers/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as promise from 'redux-promise'

const store = createStore(reducers, composeWithDevTools(
	applyMiddleware(thunk, promise),
))

ReactDOM.render(
	<Provider store={ store }>
		<App/>
	</Provider>
	, document.getElementById('root'))

RegisterSW()
