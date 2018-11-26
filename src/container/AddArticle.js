import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
} from 'antd';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddArticle from "src/components/AddArticle/AddArticle";
import {ARTICLE_ADD_REQ} from "actions/article";
import {ARTICLE_SOURCE_LIST_REQ} from "actions/articleSource";

const mapStateToProps = state => {
  return {
    articleSourceList: state.articleSource.articleSourceList,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticleSourceList: payload => {
      dispatch({
        type: ARTICLE_SOURCE_LIST_REQ,
        payload,
      })
    },
    addArticle: payload => {
      dispatch({
        type: ARTICLE_ADD_REQ,
        payload,
      })
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddArticle);