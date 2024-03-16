import { combineReducers, createStore } from 'redux';
import counterReducer from './features/counterSlice';
import UserProfile from './components/UserProfile';

const rootReducer = combineReducers({
   counter: counterReducer,
   profile: UserProfile,
});

const store = createStore(rootReducer);

export default store;
