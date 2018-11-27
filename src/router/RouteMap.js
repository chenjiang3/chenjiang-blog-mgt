import React, {Component} from 'react';

import Login from 'src/container/Login';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import App from 'src/container/AppPage';
import AddArticle from "src/container/AddArticle";
import ArticleList from 'src/container/ArticleList';
import Paths from "router/Paths";
import {getObject} from "src/utils/storage";
import IndexPage from "../container/IndexPage";
import ArticleSourceList from 'src/container/ArticleSourceList';
import EditArticleSource from "src/container/EditArticleSource";
import UserList from "src/container/UserList";
import UserDetail from 'src/container/UserDetail';

const RouterList = [
  {
    component: Login,
    path: Paths.login,
    auth: false,
  },
  {
    component: ArticleList,
    path: Paths.articleList,
    auth: true,
  },
  {
    component: AddArticle,
    path: Paths.addArticle,
    auth: true,
  },
  {
    component: IndexPage,
    path: Paths.index,
    auth: true,
  },
  {
    component: ArticleSourceList,
    path: Paths.articleSource,
    auth: true,
  },
  {
    component: EditArticleSource,
    path: Paths.editArticleSource,
    auth: true,
  },
  {
    component: UserList,
    path: Paths.userList,
    auth: true,
  },
  {
    component: UserDetail,
    path: Paths.userDetail,
    auth: true,
  }
];

class RouteConfig extends Component {

  render() {
    const {token} = getObject('token') || {};
    return (
      <App>
        {
          RouterList.map(item => (
            <Route
              key={item.path}
              exact={true}
              path={item.path}
              render={props => {
                if (!item.auth) {
                  return <item.component {...props} />
                } else {
                  if (token) {
                    return <item.component {...props} />
                  } else {
                    return <Redirect to={{
                      pathname: Paths.login,
                      state: {
                        from: this.props.location
                      }
                    }}/>
                  }
                }
              }}
            />
          ))
        }
      </App>
    );
  }

}

export default class RouteMap extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <RouteConfig/>
        </Switch>
      </Router>
    )
  }

}





























