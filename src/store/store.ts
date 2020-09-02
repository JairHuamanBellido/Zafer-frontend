import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer } from './reducer/login.reducer';

const reducers = combineReducers({
  login: loginReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware()),
);
