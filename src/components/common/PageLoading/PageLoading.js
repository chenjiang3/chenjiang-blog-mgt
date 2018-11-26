import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
  Spin
} from 'antd';

import React, {Component} from 'react';

export default class PageLoading extends Component {

  render() {
    const {
      loading = false,
    } = this.props;
    return (
      <div>
        <Spin spinning={loading} size={'large'}>
          {this.props.children}
        </Spin>
      </div>
    )
  }

}