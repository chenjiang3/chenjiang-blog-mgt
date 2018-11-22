import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
  Form,
  Select,
  Input,
  Button,
} from 'antd';

import React, {Component} from 'react';
import Editor from "src/components/common/Editor/Editor";
import Paths from "router/Paths";

const {Option} = Select;
const FormItem = Form.Item;

@Form.create()
export default class AddArticle extends Component {

  constructor(props) {
    super(props);
    this.editor = undefined;
  }

  _onEditorRef = ref => {
    this.editor = ref;
  };

  _handleSubmit = e => {
    e.preventDefault();
    const {
      addArticle,
      form: {
        validateFields,
      }
    } = this.props;
    validateFields && validateFields((err, values) => {
      if (!err) {
        const {
          abstract,
          nature,
          rawFileLink,
          tag,
          title,
          type
        } = values;
        addArticle && addArticle({
          title,
          tags: tag,
          type,
          abstractContent: abstract,
          content: this.editor && this.editor.getEditorContent(),
          rawFileLink,
          success: () => {
            this.props.history.push(Paths.articleList);
          }
        });
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const selectBefore = getFieldDecorator('nature', {initialValue: '原创'})(
      <Select style={{width: 70}}>
        <Option value={'原创'}>原创</Option>
        <Option value={'转载'}>转载</Option>
      </Select>
    );
    return (
      <div>
        <Form layout={'inline'}>
          <FormItem hasFeedback={true} label={'文章标题'}>
            {
              getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: '请填写文章标题!'
                  }
                ]
              })(
                <Input
                  addonBefore={selectBefore}
                  placeholder={'请填写文章标题'}
                  style={{width: 220}}
                />
              )
            }
          </FormItem>
          <FormItem hasFeedback={true} label={'文章标签'}>
            {
              getFieldDecorator('tag', {
                rules: [
                  {
                    required: true,
                    message: '文章标签!'
                  }
                ]
              })(
                <Input
                  placeholder={'填写个文章标签吧'}
                  style={{width: 220}}
                />
              )
            }
          </FormItem>
          <FormItem hasFeedback={true} label={'文章类型'}>
            {
              getFieldDecorator('type', {
                rules: [
                  {
                    required: true,
                    message: '文章类型!'
                  }
                ]
              })
              (
                <Select style={{width: 220}}>
                  <Option value={''}>请选择类型</Option>
                  <Option value={'typescript'}>typescript</Option>
                  <Option value={'javascript'}>javascript</Option>
                  <Option value={'react'}>react</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem hasFeedback={true} label={'文章摘要'}>
            {
              getFieldDecorator('abstract', {
                rules: [
                  {
                    required: true,
                    message: '文章摘要!'
                  }
                ]
              })(
                <Input
                  placeholder={'填写个文章摘要吧'}
                  style={{width: 220}}
                />
              )
            }
          </FormItem>
          <FormItem hasFeedback={true} label={'文章源文件链接'}>
            {
              getFieldDecorator('rawFileLink', {
                rules: [
                  {
                    required: true,
                    message: '请填写文章源文件链接!'
                  }
                ]
              })(
                <Input
                  placeholder={'文章源文件链接！'}
                  style={{width: 600}}
                />
              )
            }
          </FormItem>
          <FormItem>
            <Button
              type={'primary'}
              htmlType={'submit'}
              className={'login-form-button'}
              onClick={this._handleSubmit}
            >
              发表文章
            </Button>
          </FormItem>
          <Editor onRef={this._onEditorRef}/>
        </Form>

      </div>
    )
  }

}