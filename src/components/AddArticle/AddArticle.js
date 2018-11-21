import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
} from 'antd';

import React, {Component} from 'react';
import Editor from "src/components/common/Editor/Editor";

export default class AddArticle extends Component {

  render() {
    return (
      <div>
        <Editor />
      </div>
    )
  }

}