import React, {Compontent} from 'react';
import {connect} from 'react-redux';
import Login from "../components/Login/Login";
import {USER_FINDBYMOBILE_REQ, USER_LOGIN_REQ} from 'src/redux/actions/user';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    findByMobile: payload => {
      dispatch({
        type: USER_FINDBYMOBILE_REQ,
        payload,
      });
    },
    doLogin: payload => {
      dispatch({
        type: USER_LOGIN_REQ,
        payload,
      })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);