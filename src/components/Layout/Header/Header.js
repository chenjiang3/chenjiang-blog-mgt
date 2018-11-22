import {
  Layout,
  Popover,
  Icon,
  Dropdown,
  Menu,
} from 'antd';

import React, {Component} from 'react';

const {Header} = Layout;
import './style.less';
import Paths from "router/Paths";

export default class BlogHeader extends Component {

  _onLogout = () => {
    const {
      doLogout,
    } = this.props;
    doLogout && doLogout({
      success: () => {
        this.props.history.push(Paths.login);
      }
    });
  };

  render() {
    const {
      isMobile,
      children,
      collapsed,
    } = this.props;
    const menu = (
      <Menu>
        <Menu.Item key={'logout'} onClick={this._onLogout}>
          退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <Header className={'header'}>
        {
          isMobile ? (
            <Popover content={children} placement={'bottomRight'} trigger={'click'}>
              <Icon className={'trigger'} type={'bars'} onClick={() => {}} />
            </Popover>
          )
            :
          (
            <Icon
              className={'trigger'}
              type={collapsed ? 'menu-unfold' : 'menu-fold' }
              onClick={()=>{}}
            />
          )
        }
        <Dropdown overlay={menu} placement={'bottomLeft'}>
          <div className={'user'}>
            <Icon type={'user'} style={{marginRight: 5, fontSize: 20}}/>
            <span>admin</span>
          </div>
        </Dropdown>
      </Header>
    )
  }

}