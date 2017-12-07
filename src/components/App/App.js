//react
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from '../../store/store';

// react-virtualized
import 'react-virtualized/styles.css';

// containers
import UsersList from '../../containers/UsersList/UsersList';
import UsersDetails from '../../containers/UsersDetails/UsersDetails';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={UsersList} />
            <Route path="/users/:userId" component={UsersDetails} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
