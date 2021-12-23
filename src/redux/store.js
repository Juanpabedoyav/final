import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import {getDataReducer} from '../redux/reducers/getDataReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers= combineReducers({
  data:getDataReducer,
})



export const store = createStore(
   reducers,
   composeEnhancers(
   applyMiddleware(thunk)
   )
)


