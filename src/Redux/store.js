import { applyMiddleware, compose, createStore} from 'redux'
import { rootReducer } from './reducers/index'
import {thunk} from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //redux devTools fi const

export const store= createStore(rootReducer,composeEnhancers(applyMiddleware(thunk))) //redux thunk houa middleware bech y5alli redux ye9bel les fonctions asynchrones
// root reducer c la combinaison entre product reducer et userReducer: elli 5demneha fel index.js