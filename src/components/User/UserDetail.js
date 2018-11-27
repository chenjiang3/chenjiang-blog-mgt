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
export default class UserDetail extends Component {

  render() {
    const {
      form: {getFieldDecorator},
    } = this.props;
    return (
      <PageLoading>
        <Form layout={'inline'}>
          <FormItem hasFeedback={true} label={'用户名'}>
            {
              getFieldDecorator('userName', {
                rules: [
                  {
                    required: true,
                    message: '请填写用户名'
                  }
                ]
              })
              (
                <Input
                  placeholder={'请填写用户名'}
                  style={{width: 400}}
                   />
              )
            }
          </FormItem>
          <FormItem hasFeedback={true} label={'手机号'}>
            {
              getFieldDecorator('mobile', {
                rules: [
                  {
                    required: true,
                    message: '请填写手机号'
                  }
                ]
              })
              (
                <Input
                  placeholder={'请填写手机号'}
                  style={{width: 400}}
                />
              )
            }
          </FormItem>
          <FormItem hasFeedback={true} label={'简介'}>
            {
              getFieldDecorator('brief', {
                rules: [
                  {
                    required: true,
                    message: '请填写简介'
                  }
                ]
              })
              (
                <Input
                  placeholder={'请填写简介'}
                  style={{width: 400}}
                />
              )
            }
          </FormItem>
          <FormItem hasFeedback={true} label={'email'}>
            {
              getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: '请填写email'
                  }
                ]
              })
              (
                <Input
                  placeholder={'请填写email'}
                  style={{width: 400}}
                />
              )
            }
          </FormItem>
          <FormItem hasFeedback={true} label={'头像链接'}>
            {
              getFieldDecorator('headerSrc', {
                rules: [
                  {
                    required: true,
                    message: '请填写头像链接'
                  }
                ]
              })
              (
                <Input
                  placeholder={'请填写头像链接'}
                  style={{width: 400}}
                />
              )
            }
          </FormItem>
        </Form>

      </PageLoading>
    )
  }

}