import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
} from 'antd';

import React, {Component} from 'react';

import {connect} from 'react-redux';
import ArticleSourceList from "src/components/ArticleSource/ArticleSourceList";
import {ARTICLE_SOURCE_DELETE_BY_ID_REQ, ARTICLE_SOURCE_LIST_REQ} from "actions/articleSource";

const mapStateToProps = state => {
  return {
    articleSourceList: state.articleSource.articleSourceList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticleSourceList: payload => {
      dispatch({
        type: ARTICLE_SOURCE_LIST_REQ,
        payload,
      })
    },
    deleteById: payload => {
      dispatch({
        type: ARTICLE_SOURCE_DELETE_BY_ID_REQ,
        payload,
      })
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleSourceList);