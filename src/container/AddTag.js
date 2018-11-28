import {connect} from 'react-redux';
import AddTag from "src/components/Tags/AddTag";
import {TAG_ADD_REQUEST} from "actions/tag";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addTag: payload => {
      dispatch({
        type: TAG_ADD_REQUEST,
        payload,
      })
    }
  };
};

export default
connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTag);