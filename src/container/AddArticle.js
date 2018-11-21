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

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
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