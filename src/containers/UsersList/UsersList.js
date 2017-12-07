//react
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// react-virtualized
import { AutoSizer, InfiniteLoader, List } from 'react-virtualized';

// spinner
import Spinner from 'react-spinkit';

// actions
import { usersFetchData, usersInitData } from '../../actions/users';

// components
import UsersListItem from '../../components/UsersListItem/UsersListItem';

// styles
import './UsersList.css';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.isRowLoaded = this.isRowLoaded.bind(this);
    this.loadMoreRows = this.loadMoreRows.bind(this);
    this.rowRenderer = this.rowRenderer.bind(this);
  }

  componentDidMount() {
    this.props.initData();
    this.props.fetchData('https://api.github.com/users');
  }

  isRowLoaded({ index }) {
    return !!this.props.users[index];
  }

  loadMoreRows({ startIndex, stopIndex }) {
    const since = this.props.users[this.props.users.length - 1].id;
    this.props.fetchData(`https://api.github.com/users?since=${since}`);
  }

  rowRenderer({ key, index, style, isScrolling }) {
    const user = this.props.users[index];

    return (
      <div key={key} style={style}>
        <UsersListItem user={user} />
      </div>
    );
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the users</p>;
    }

    if (!this.props.isLoaded) {
      return (
        <div>
          <Spinner name="circle" fadeIn="none" className="spinner" />
        </div>
      );
    }

    return (
      <div className="UsersListInfinite">
        <AutoSizer>
          {({ width, height }) => (
            <div>
              <InfiniteLoader
                isRowLoaded={this.isRowLoaded}
                loadMoreRows={this.loadMoreRows}
                rowCount={this.props.users.length + 1}
              >
                {({ onRowsRendered, registerChild }) => (
                  <div>
                    <List
                      height={height}
                      onRowsRendered={onRowsRendered}
                      ref={registerChild}
                      rowCount={this.props.users.length}
                      rowHeight={50}
                      rowRenderer={this.rowRenderer}
                      width={width}
                    />
                  </div>
                )}
              </InfiniteLoader>
            </div>
          )}
        </AutoSizer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    hasErrored: state.usersHasErrored,
    isLoaded: state.usersIsLoaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(usersFetchData(url)),
    initData: url => dispatch(usersInitData())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UsersList)
);
