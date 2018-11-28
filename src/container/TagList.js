import {connect} from 'react-redux';
import TagList from 'src/components/Tags/TagList';
import {TAG_LIST_REQUEST} from "actions/tag";

const mapStateToProps = state => {
  return {
    tagList: state.tag.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchList: payload => {
      dispatch({
        type: TAG_LIST_REQUEST,
        payload,
      })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagList)