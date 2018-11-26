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
  Select
} from 'antd';

import React, {Component} from 'react';
import Paths from "router/Paths";

const FormItem = Form.Item;
const Option = Select.Option;

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
    const addonBefore = getFieldDecorator('type', {initialValue: 0})(
      <Select style={{width: 120}}>
        <Option value={0}>文章分类</Option>
        <Option value={1}>文章来源</Option>
      </Select>
    );

    return (
      <div>
        <Form layout={'inline'}>
          <FormItem hasFeedback={true} label={'文章类型'}>
            {
              getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: '请填写文章类型！'
                  }
                ]
              })
              (
                <Input
                  addonBefore={addonBefore}
                  placeholder={'请填写文章类型'}
                  style={{width: 400}}
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