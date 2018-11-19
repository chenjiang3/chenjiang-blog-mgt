import React, { Component } from 'react';
import {
  Layout,

} from 'antd';

import Nav from 'src/components/Nav/Nav';
import getRouter from 'router/router';

const menuList = [
  { label: '首页', url: '/', icon: 'home', key: '1'},
  {
    children: [
      {
        icon: 'form',
        key: '2',
        label: '文章管理',
        url: '/edit-article',
      },
      {
        icon: 'upload',
        key: '3',
        label: '发表文章',
        url: '/admin/add-article'
      }
    ],
    icon: 'book',
    key: '7',
    label: '文章'
  },
  {
    children: [
      { label: '说说管理', url: '/admin/edit-say', icon: 'form', key: '5' },
      { label: '发表说说', url: '/admin/add-say', icon: 'upload', key: '6' }
    ],
    icon: 'message',
    key: '8',
    label: '说说'
  },
  {
    children: [
      {
        icon: 'form',
        key: '13',
        label: '收藏管理',
        url: '/admin/edit-collect'
      },
      {
        icon: 'upload',
        key: '12',
        label: '添加收藏',
        url: '/admin/add-collect'
      }
    ],
    icon: 'file-add',
    key: '11',
    label: '收藏'
  }
];

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      isMobile: false,
      tagList: [{ label: '首页', url: '/admin', icon: 'home', key: '1' }],
      theme: true,
    };
  }

  _renderLogin = () => {
    return <div>{children}</div>
  };

  _renderNotLogin = () => {
    return (
      <Layout className={'menu'} style={{height: '100vh'}}>

      </Layout>
    )
  };

  render() {
    const {
      children, location
    } = this.props;
    const {
      collapsed,
      isMobile,
      tagList,
      theme,
    } = this.state;
    const isLogin = location.pathname === '/login';
    return (
      <div>

      </div>
    )
  }

}

// export default class App extends Component {
//
//   render() {
//     return (
//       <div>
//         <Nav/>
//         {getRouter()}
//       </div>
//     )
//   }
//
// }