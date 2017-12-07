import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import './UsersListItem.css';

class UsersListItem extends Component {
  render() {
    const user = this.props.user;

    return (
      <Row className="UsersListItem">
        <Col xs={4}>
          <img src={user.avatar_url} alt={user.login} />
        </Col>
        <Col xs={4}>
          <h3>{user.login}</h3>
        </Col>
        <Col xs={4}>
          <Link
            to={{
              pathname: `/users/${this.props.user.id}`,
              state: { user: this.props.user }
            }}
          >
            <Button>Details</Button>
          </Link>
        </Col>
      </Row>
    );
  }
}

export default UsersListItem;
