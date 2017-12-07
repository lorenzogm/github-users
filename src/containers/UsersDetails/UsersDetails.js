import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

import './UsersDetails.css';

class UsersListuser extends Component {
  render() {
    const user = this.props.location.state.user;

    return (
      <div className="UsersDetails">
        <Thumbnail src={user.avatar_url} alt={user.login}>
          <h3>
            {user.login} (ID{user.id})
          </h3>
          <p>{user.html_url}</p>
        </Thumbnail>
        <h1>{}</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default UsersListuser;
