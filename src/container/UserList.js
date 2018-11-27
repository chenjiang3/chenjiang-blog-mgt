import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
} from 'antd';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserList from "src/components/User/UserList";
import {USER_LIST_REQUEST} from "actions/user";

const mapStateToProps = state => {
  return {
    userList: state.user.userList.list,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserList: payload => {
      dispatch({
        type: USER_LIST_REQUEST,
        payload,
      })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);