import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export default class BlogMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '1',
      openKeys: '',
      pathname: '/'
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    const {pathname, menuList} = nextProps;
    if (state.pathname === pathname) {
      return null;
    }

    let nextState = {};
    menuList.forEach(items => {
      if (Array.isArray(items.children)) {
        items.children.forEach(item => {
          if (item.url === pathname) {
            nextState = {
              key: item.key,
              openKeys: items.key,
            }
          }
        })
      } else {
        if (items.url === pathname) {
          nextState = {key: items.key}
        }
      }
    });
    nextState = {...nextState, pathname};
    return nextState;
  }

  _onMenuItemClick = item => {
    this.setState({
      key: item.key,
    })
  };

  _onOpenChange = openKeys => {
    this.setState({
      openKeys: openKeys[openKeys.length - 1],
    });
  };

  renderMenu = (menuList) => {
    return menuList && menuList.map(item => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} className={'big-icon-font'}/>
                <span>{item.label}</span>
              </span>
            }
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <MenuItem
            key={item.key}
            onClick={this._onMenuItemClick}
          >
            <Link to={item.url || ''}>
              <Icon type={item.icon} className={'big-icon-font'}/>
              <span>{item.label}</span>
            </Link>
          </MenuItem>
        )
      }
    });
  };

  render() {
    const {
      key,
      openKeys,
      pathname,
    } = this.state;
    return (
      <Menu
        theme={this.props.theme ? 'dark' : 'light'}
        mode={'inline'}
        onOpenChange={this._onOpenChange}
        selectedKeys={[key]}
        openKeys={[openKeys]}
      >
        {this.renderMenu(this.props.menuList)}
      </Menu>
    )
  }

}