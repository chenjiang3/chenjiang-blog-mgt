import React, {Component} from 'react';
import {connect} from 'react-redux';
import ArticleList from "src/components/ArticleList/ArticleList";
import {ARTICLE_LIST_REQ, ARTICLE_LIST_RSP} from "actions/article";

const mapStateToProps = state => {
  return {
    articleList: state.article.articleList,
    loading: state.article.loading,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchList: payload => {
      dispatch({
        type: ARTICLE_LIST_REQ,
        payload,
      })
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);