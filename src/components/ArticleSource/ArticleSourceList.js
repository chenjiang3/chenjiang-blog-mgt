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
  Popconfirm
} from 'antd';

import React, {Component} from 'react';
import Paths from "router/Paths";

@Form.create()
export default class ArticleSourceList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false,
    };

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
        key: 'action',
        title: '操作',
        render: _ => (
          <span>
        <Button
          icon={'edit'}
          type={'primary'}
          size={'small'}
          style={{marginRight: 10}}
          onClick={_ => {}}
        >
          编辑
        </Button>
        <Button
          icon={'delete'}
          type={'danger'}
          size={'small'}
          onClick={this._onDeleteClick}
        >
          删除
        </Button>
      </span>
        )
      }
    ];
  }

  componentDidMount() {
    const {
      fetchArticleSourceList
    } = this.props;
    fetchArticleSourceList && fetchArticleSourceList();
  }

  _onCreateArticle = e => {
    e.preventDefault();
    this.props.history.push(Paths.editArticleSource);
  };

  _onDeleteClick = e => {
    e.preventDefault();
    this.setState({
      showDeleteModal: true,
    })
  };

  renderDeleteModal = () => {
    const {
      showDeleteModal
    } = this.state;
    return showDeleteModal ? (
      <Popconfirm
        onConfirm={() => {}}
        onCancel={() => {
          this.setState({
            showDeleteModal: false,
          })
        }}
        okText={'确定'}
        cancelText={'取消'}
        // centered={true}
        title={'提示'}
        // closable={true}
        visible={showDeleteModal}
      />
    ) : null;
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
        {this.renderDeleteModal()}
      </div>
    )
  }

}