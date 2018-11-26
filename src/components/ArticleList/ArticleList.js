import React, {Component} from 'react';
import {Button, message, Modal, Table, Tag, Tooltip, Spin} from 'antd'
import {ColumnProps} from 'antd/lib/table'

import './style.less';
import Tags from "src/components/Layout/Tags/Tags";

const columns = [
  {
    key: 'nature',
    render: text => <h4>{text.type}</h4>,
    title: '文章类型'
  },
  {
    key: 'title',
    render: text => <h4>{text.title}</h4>,
    title: '文章标题'
  },
  {
    key: 'abstract',
    render: _ => (
      <Tooltip title={_.abstractContent}>
        <p className={'abstract'}>{_.abstractContent}</p>
      </Tooltip>
    ),
    title: '文章简介'
  },
  {
    key: 'tag',
    render: _ => (
      <Tag key={_.tags}>{_.tags}</Tag>
    ),
    title: '标签'
  },
  {
    key: 'create_at',
    render: _ => (
      <span>{new Date(_.createTime).toLocaleDateString()}</span>
    ),
    title: '发表时间'
  },
  {
    align: 'center',
    dataIndex: 'access',
    key: 'access',
    title: '浏览数量'
  },
  {
    key: 'action',
    render: _ => (
      <span>
        <Button
          icon={'edit'}
          type={'primary'}
          size={'small'}
          style={{marginRight: 10}}
          onClick={() => {
          }}
        >
          编辑
        </Button>
        <Button
          icon={'delete'}
          type={'danger'}
          size={'small'}
          onClick={() => {
          }}
        >
          删除
        </Button>
      </span>
    ),
    title: '操作'
  }
];

export default class ArticleList extends Component {

  componentDidMount() {
    const {
      fetchList
    } = this.props;
    fetchList && fetchList();
  }

  _renderSearch = () => {

  };

  render() {
    const {
      articleList,
      loading
    } = this.props;
    return (
      <Spin spinning={loading}>
        <div className={'search-form'}>
          {this._renderSearch()}
        </div>
        <Table
          dataSource={articleList}
          columns={columns}
          bordered={true}
          rowKey={"_id"}
          pagination={{
            current: 1,
            onChange: () => {
            },
            onShowSizeChange: () => {
            },
            pageSize: 100,
            showSizeChanger: true,
            total: 100
          }}
        />
      </Spin>
    )
  }

}