import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
  Form,
  Input
} from 'antd';

import React, {Component} from 'react';
import PageLoading from "src/components/common/PageLoading/PageLoading";

const FormItem = Form.Item;

@Form.create()
export default class EditTag extends Component {

  render() {
    const {
      form: {
        getFieldDecorator
      }
    } = this.props;
    return (
      <PageLoading>
        <Form>
          <FormItem hasFeedback={true}>
            {
              getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: '请输入标签名'
                  }
                ]
              })
              (
                <Input />
              )
            }
          </FormItem>
        </Form>
      </PageLoading>
    )
  }

}