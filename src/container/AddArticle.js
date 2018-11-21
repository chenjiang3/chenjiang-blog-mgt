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

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddArticle);