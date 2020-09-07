import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer } from './reducer/login.reducer';
import { registerUserReducer } from './reducer/registerUser.reducer';
import { userReducer } from './reducer/user.reducer';
import { productReducer } from './reducer/product.reducer';

const reducers = combineReducers({
  loginReducer,
  registerUserReducer,
  userReducer,
  productReducer,
});
export type RootState = ReturnType<typeof reducers>;
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware()),
);
