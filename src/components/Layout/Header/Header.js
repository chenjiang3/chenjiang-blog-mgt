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
import {getObject} from "src/utils/storage";

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

  _toggle = () => {
    const {toggle} = this.props;
    togHeadergle && toggle();
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
    const user = getObject('user') || {};
    return (
      <Header className={'header'}>
        {
          isMobile ? (
            <Popover content={children} placement={'bottomRight'} trigger={'click'}>
              <Icon className={'trigger'} type={'bars'} onClick={this._toggle} />
            </Popover>
          )
            :
          (
            <Icon
              className={'trigger'}
              type={collapsed ? 'menu-unfold' : 'menu-fold' }
              onClick={this._toggle}
            />
          )
        }
        <Dropdown overlay={menu} placement={'bottomLeft'}>
          <div className={'user'}>
            <Icon type={'user'} style={{marginRight: 5, fontSize: 20}}/>
            <span>{user.userName || ""}</span>
          </div>
        </Dropdown>
      </Header>
    )
  }

}