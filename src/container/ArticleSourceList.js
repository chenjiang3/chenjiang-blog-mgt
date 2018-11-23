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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleSourceList);