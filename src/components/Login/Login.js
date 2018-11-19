import {Button, Form, Icon, Input} from 'antd';
import {FormComponentProps} from 'antd/lib/form';
import React, {Component} from 'react';
import './style.less';

const FormItem = Form.Item;

@Form.create()
export default class Login extends Component {

  _handleSubmit = () => {

  };

  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    return (
      <div className={'login'}>
        <div className={'logo'}>
          <img alt={'logo'} src={'http://antd-admin.zuiidea.com/public/logo.svg'}/>
          <span>陈江-blog-管理系统</span>
        </div>
        <Form onSubmit={this._handleSubmit}>
          <FormItem hasFeedback={true}>
            {
              getFieldDecorator('userName', {
                rules: [{ required: true, message: '账号不能为空!' }]
              })(
                <Input prefix={
                  <Icon
                    type={'user'}
                    style={{color: 'rgba(0, 0, 0, .5)', fontSize: 16}}
                  />
                }
                placeholder={'请输入账号'}
                />
              )
            }
          </FormItem>
          <FormItem hasFeedback={true}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '密码不能为空!' }]
            })(
              <Input
                prefix={
                  <Icon
                    type="lock"
                    style={{ color: 'rgba(0,0,0,.5)', fontSize: 16 }}
                  />
                }
                type="password"
                placeholder="请输入密码"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              loading={false}
              type="primary"
              htmlType="submit"
              className="login-form-button">
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }

}