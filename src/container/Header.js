import {connect} from 'react-redux';
import Header from 'src/components/Layout/Header/Header';
import {USER_LOGOUT_REQ} from "actions/user";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    doLogout: payload => {
      dispatch({
        type: USER_LOGOUT_REQ,
        payload,
      })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);