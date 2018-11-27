import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
  Form,
  Table, Button
} from 'antd';

import React, {Component} from 'react';
import PageLoading from "src/components/common/PageLoading/PageLoading";
import Paths from "router/Paths";

@Form.create()
export default class UserList extends Component {

  constructor(props) {
    super(props);
    this.columns = [
      {
        key: 'id',
        title: '序号',
        render: _ => <h4>{_.id}</h4>
      },
      {
        key: 'user-name',
        title: '用户名',
        render: _ => <h4>{_.userName}</h4>
      },
      {
        key: 'mobile',
        title: '手机号',
        render: _ => {
          return <h4>{_.mobile}</h4>
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
                icon={'edit'}
                type={'primary'}
                size={'small'}
                style={{marginRight: 10}}
                onClick={item => {
                  this.props.history.push(Paths.userDetail);
                }}
              >
              详情
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
      fetchUserList
    } = this.props;
    fetchUserList && fetchUserList({
      pageIndex: 1,
      pageSize: 100,
    });
  };

  render() {
    const {
      userList: {
        item
      }
    } = this.props;
    return (
      <PageLoading>
        <Button
          type={'primary'}
          htmlType={'submit'}
          className={'login-form-button'}
          onClick={() => {}}
          style={{marginBottom: '20px'}}
        >
          新建
        </Button>
        <Table
          dataSource={item}
          columns={this.columns}
          bordered={true}
          rowKey={"id"}
        />
      </PageLoading>
    )
  }

}