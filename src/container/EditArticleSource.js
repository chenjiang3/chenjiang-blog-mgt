import {connect} from 'react-redux';
import EditArticleSource from "src/components/ArticleSource/EditArticleSource";
import {ARTICLE_SOURCE_ADD_REQ} from "actions/articleSource";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addArticleSource: payload => {
      return dispatch({
        type: ARTICLE_SOURCE_ADD_REQ,
        payload,
      })
    }
  };
};

export default
connect(mapStateToProps, mapDispatchToProps)(EditArticleSource)
