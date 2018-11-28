import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
  Table,
  Button
} from 'antd';

import React, {Component} from 'react';
import PageLoading from "src/components/common/PageLoading/PageLoading";

export default class TagList extends Component {

  constructor(props) {
    super(props);
    this.columns = [
      {
        key: 'id',
        title: '序号',
        render: item => <h4>{item.id}</h4>
      },
      {
        key: 'name',
        title: '标签名',
        render: item => <h4>{item.name}</h4>
      },
      {
        key: 'action',
        title: '操作',
        render: item => (
          <span>
            <Button
              icon={'edit'}
              type={'primary'}
              size={'small'}
              style={{marginRight: 10}}
              onClick={() => {}}
            >
              编辑
            </Button>
            <Button
              icon={'delete'}
              type={'danger'}
              size={'small'}
              style={{marginRight: 10}}
              onClick={() => {}}
            >
              删除
            </Button>
          </span>
        )
      },
    ];
  }

  componentDidMount() {
    const {
      fetchList
    } = this.props;
    fetchList && fetchList();
  }

  render() {
    const {
      tagList: {
        list,
        loading,
      }
    } = this.props;
    return (
      <PageLoading loading={loading}>
        <Table
          dataSource={list}
          columns={this.columns}
          bordered={true}
          rowKey={'id'}
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
      </PageLoading>
    )
  }

}