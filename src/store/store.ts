import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer } from './reducer/login.reducer';
import { registerUserReducer } from './reducer/registerUser.reducer';

const reducers = combineReducers({
  login: loginReducer,
  registerUser: registerUserReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware()),
);
