import {Icon, Layout, Switch} from 'antd'
import * as React from 'react'
import Header from 'src/container/Header';
import BlogMenu from '../Layout/Menu/Menu'
import Tags from '../Layout/Tags/Tags'
import './style.less'
import Paths from "router/Paths";
import menuList from './menuList';

const {Sider, Content} = Layout;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      isMobile: false,
      tagList: [{label: '首页', url: '/', icon: 'home', key: '1'}],
      theme: true
    }
  }

  componentDidMount() {
    this.isLogin();
    // this.props.isLogin()
    this.onResize();
    this.setState({
      tagList: JSON.parse(localStorage.getItem('tagList') || '[]')
    });
  }

  isLogin = () => {
    const user = localStorage.getItem('user');
    if (user && user !== 'undefined') {
      // this.props.history.push('/admin')
    } else {
      // this.props.history.push('/admin/login')
    }
  };

  onClose = (tag) => {
    this.setState(
      {tagList: this.state.tagList.filter(item => item.key !== tag.key)},
      () => {
        if (this.state.tagList.length > 0) {
          const {url} = this.state.tagList[this.state.tagList.length - 1];
          // this.props.history.push(url)
          this.setLocalStorage()
        }
      }
    );
  };

  onResize = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      window.onresize = () => {
        this.setState({
          isMobile: document.body.clientWidth < 769
        })
      }
    }, 500)
  };

  toggle = () => {
    this.setState({collapsed: !this.state.collapsed})
  };

  setLocalStorage = () => {
    localStorage.setItem('tagList', JSON.stringify(this.state.tagList))
  };

  handleTag = (item) => {
    const tagKeys = new Set(this.state.tagList.map(tag => tag.key));
    if (tagKeys.has(item.key)) {
      this.setState({tagList: [...this.state.tagList]}, this.setLocalStorage)
    } else {
      this.setState(
        {tagList: [...this.state.tagList, item]},
        this.setLocalStorage
      )
    }
  };

  switchOnChange = () => {
    this.setState({theme: !this.state.theme})
  };

  render() {
    const {children, location} = this.props;
    const {collapsed, tagList, isMobile, theme} = this.state;
    const isLogin = location.pathname === '/login';
    const isTransparent = location.pathname === '/edit-collect';
    const isIndex = location.pathname === '/';
    const user = localStorage.getItem('user');
    return !isLogin ? (
      <Layout className="menu" style={{height: '100vh'}}>
        {!isMobile && (
          <Sider
            theme={theme ? 'dark' : 'light'}
            trigger={null}
            collapsed={collapsed}
            collapsible={true}>
            <div className="logo">
              <img
                alt="logo"
                src="http://antd-admin.zuiidea.com/public/logo.svg"
              />
              {!collapsed && <span>博客管理系统</span>}
            </div>
            <BlogMenu
              menuList={menuList}
              pathname={location.pathname}
              handleTag={this.handleTag}
              theme={theme}
            />
            <div className={theme ? 'switch-theme dark' : 'switch-theme light'}>
              {!collapsed && (
                <span>
                  <Icon type="bulb"/>
                  <span className="title">切换主题</span>
                </span>
              )}
              <Switch
                checkedChildren="dark"
                unCheckedChildren="light"
                defaultChecked={true}
                onChange={this.switchOnChange}
              />
            </div>
          </Sider>
        )}
        <Layout>
          <Header
            {...this.props}
            collapsed={collapsed}
            toggle={this.toggle}
            isMobile={isMobile}>
            {isMobile && (
              <BlogMenu
                menuList={menuList}
                pathname={location.pathname}
                handleTag={this.handleTag}
                theme={theme}
              />
            )}
          </Header>
          <Tags
            tagList={tagList}
            pathname={location.pathname}
            onClose={this.onClose}
          />
          <Content
            className="content"
            style={{
              backgroundColor: isTransparent || isIndex ? 'transparent' : '#fff'
            }}>
            <div>{children}</div>
          </Content>
        </Layout>
      </Layout>
    ) : (
      <div>{children}</div>
    )
  }
}

export default App
