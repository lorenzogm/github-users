export function usersFetchData(url) {
  return dispatch => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(users => {
        dispatch(usersFetchDataSuccess(users));
        dispatch(usersIsLoaded(true));
      })
      .catch(() => dispatch(usersHasErrored(true)));
  };
}

export function usersHasErrored(bool) {
  return {
    type: 'USERS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function usersIsLoaded(bool) {
  return {
    type: 'USERS_IS_LOADED',
    firstTimeLoaded: bool
  };
}

export function usersInitData(users) {
  return {
    type: 'USERS_INIT_DATA',
    users
  };
}

export function usersFetchDataSuccess(users) {
  return {
    type: 'USERS_FETCH_DATA_SUCCESS',
    users
  };
}
