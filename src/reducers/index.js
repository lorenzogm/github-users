import { combineReducers } from 'redux';

import { users, usersHasErrored, usersIsLoaded } from './users';

export default combineReducers({
  users,
  usersHasErrored,
  usersIsLoaded
});
