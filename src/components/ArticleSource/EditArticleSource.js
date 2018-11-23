import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
  Form,
  Input,
  Button,
  message,
} from 'antd';

import React, {Component} from 'react';
import Paths from "router/Paths";

const FormItem = Form.Item;

@Form.create()
export default class EditArticleSource extends Component {

  _onClick = e => {
    e.preventDefault();
    const {
      form: {validateFields},
      addArticleSource,
    } = this.props;
    validateFields && validateFields((err, values) => {
      if (err) {
        message.error(err.message);
        return;
      }
      const payload = {
        ...values,
        success: msg => {
          message.success(msg);
          this.props.history.push(Paths.articleSource);
        }
      };
      addArticleSource && addArticleSource(payload);
    });
  };

  render() {
    const {
      form: {getFieldDecorator},
    } = this.props;
    return (
      <div>
        <Form layout={'inline'}>
          <FormItem hasFeedback={true} label={'文章来源'}>
            {
              getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: '请填写文章来源！'
                  }
                ]
              })
              (
                <Input
                  placeholder={'请填写文章标题'}
                  style={{width: 220}}
                />
              )
            }
          </FormItem>
          <FormItem>
            <Button
              type={'primary'}
              htmlType={'submit'}
              className={'login-form-button'}
              onClick={this._onClick}
            >
              添加
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }

}