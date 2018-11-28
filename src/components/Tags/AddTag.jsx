import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
  message
} from 'antd';

import React, {Component} from 'react';
import PageLoading from "src/components/common/PageLoading/PageLoading";
import TagEditComponent, {TagEditType} from "src/components/Tags/TagEditComponent";
import Paths from "router/Paths";

export default class AddTag extends Component {

  _onSubmit = values => {
    const {
      addTag
    } = this.props;
    addTag && addTag({
      ...values,
      success: msg => {
        message.success(msg);
        this.props.history.push(Paths.tagList);
      }
    })
  };

  render() {
    return (
      <PageLoading>
        <TagEditComponent
          onSubmit={this._onSubmit}
          type={TagEditType.add}
        />
      </PageLoading>
    )
  }

}