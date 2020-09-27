import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer } from './reducer/login.reducer';
import { registerUserReducer } from './reducer/registerUser.reducer';
import { userReducer } from './reducer/user.reducer';
import {
  organizationReducer,
  organizationFormReducer,
} from './reducer/organization.reducer';
import { modalReducer } from './reducer/modal.reducer';
import { notificationInviteReducer } from './reducer/notification-invite.reducer';

const reducers = combineReducers({
  loginReducer,
  registerUserReducer,
  userReducer,
  organizationReducer,
  organizationFormReducer,
  modalReducer,
  notificationInviteReducer,
});
export type RootState = ReturnType<typeof reducers>;

export const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware())
    : undefined,
);
