import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
  Form
} from 'antd';

import React, {Component} from 'react';

@Form.create()
export default class ArticleSourceList extends Component {

  render() {
    const {
      form: {getFieldDecorator}
    } = this.props;
    return (
      <div>
        ArticleSourceList
      </div>
    )
  }

}