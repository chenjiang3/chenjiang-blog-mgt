import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
  Input,
  Form,
  Button
} from 'antd';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

const FormItem = Form.Item;

export const TagEditType = {
  add: 'add',
  edit: 'edit'
};

@Form.create()
export default class TagEditComponent extends Component {

  _onSubmitClick = (e) => {
    e.preventDefault();
    const {
      form: {
        validateFields
      },
      onSubmit,
    } = this.props;
    validateFields && validateFields((err, values) => {
      if (err) {
        return;
      }
      onSubmit && onSubmit(values);
    });
  };

  render() {
    const {
      form: {
        getFieldDecorator
      },
      type,
    } = this.props;
    return (
      <Form layout={'inline'}>
        <FormItem hasFeedback={true} label={'标签名字'}>
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
              <Input
                placeholder={'请输入标签名'}
              />
            )
          }
        </FormItem>
        <FormItem>
          <Button
            type={'primary'}
            htmlType={'submit'}
            className={'login-form-button'}
            onClick={this._onSubmitClick}
          >
            {
              type === TagEditType.add ? '新建' : '编辑'
            }
          </Button>
        </FormItem>
      </Form>
    );
  }

}

TagEditComponent.propTypes = {
  type: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};