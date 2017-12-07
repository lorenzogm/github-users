export function usersHasErrored(state = false, action) {
  switch (action.type) {
    case 'USERS_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function usersIsLoaded(state = false, action) {
  switch (action.type) {
    case 'USERS_IS_LOADED':
      return action.firstTimeLoaded;

    default:
      return state;
  }
}

export function users(state = [], action) {
  switch (action.type) {
    case 'USERS_INIT_DATA':
      return [];
    case 'USERS_FETCH_DATA_SUCCESS':
      return state.concat(action.users);

    default:
      return state;
  }
}
