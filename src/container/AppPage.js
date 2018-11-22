import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import App from "src/components/App/App";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);