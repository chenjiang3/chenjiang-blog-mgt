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

export default class BlogHeader extends Component {

  render() {
    const {
      isMobile,
      children,
      collapsed,
    } = this.props;
    const menu = (
      <Menu>
        <Menu.Item key={'logout'} onClick={() => {}}>
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