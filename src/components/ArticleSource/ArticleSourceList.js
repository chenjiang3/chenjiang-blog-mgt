import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
  Form,
  Pagination,
  Table,
  Button,
  Modal,
  Popconfirm,
  message
} from 'antd';

import React, {Component} from 'react';
import Paths from "router/Paths";

@Form.create()
export default class ArticleSourceList extends Component {

  constructor(props) {
    super(props);

    this.columns = [
      {
        key: 'id',
        title: '序号',
        render: _ => <h4>{_.id}</h4>
      },
      {
        key: 'name',
        title: '来源',
        render: _ => <h4>{_.name}</h4>
      },
      {
        key: 'type',
        title: '类型',
        render: _ => {
          if (_.type == 0) {
            return <h4>文章分类</h4>
          } else {
            return <h4>文章来源</h4>
          }
        }
      },
      {
        key: 'action',
        title: '操作',
        render: item => {
          return (
            <span>
              <Button
                icon={'edit'}
                type={'primary'}
                size={'small'}
                style={{marginRight: 10}}
                onClick={item => {
                }}
              >
              编辑
              </Button>
              <Button
                icon={'delete'}
                type={'danger'}
                size={'small'}
                onClick={e => {
                  e.preventDefault();
                  this._onDeleteClick(item)
                }}
              >
                删除
              </Button>
            </span>
          );
        }
      }
    ];
  }

  componentDidMount() {
    this._loadList();
  }

  _loadList = () => {
    const {
      fetchArticleSourceList
    } = this.props;
    fetchArticleSourceList && fetchArticleSourceList();
  };

  _onCreateArticle = e => {
    e.preventDefault();
    this.props.history.push(Paths.editArticleSource);
  };

  _onDeleteClick = item => {
    const {
      deleteById
    } = this.props;
    Modal.confirm({
      title: '删除记录',
      content: '确定删除该记录吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        deleteById && deleteById({
          id: item.id,
          success: text => {
            message.success(text);
            this._loadList();
          }
        });
      }
    });
  };

  render() {
    const {
      form: {getFieldDecorator},
      articleSourceList
    } = this.props;
    return (
      <div>
        <Button
          type={'primary'}
          htmlType={'submit'}
          className={'login-form-button'}
          onClick={this._onCreateArticle}
          style={{marginBottom: '20px'}}
        >
          新建
        </Button>
        <Table
          dataSource={articleSourceList}
          columns={this.columns}
          bordered={true}
          rowKey={"id"}
        />
      </div>
    )
  }

}