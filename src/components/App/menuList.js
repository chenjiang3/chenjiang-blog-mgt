import Paths from "router/Paths";

const menuList = [
  {
    label: '首页',
    url: '/',
    icon: 'home',
    key: '1'
  },
  {
    icon: 'book',
    key: '2',
    label: '文章',
    children: [
      {
        icon: 'form',
        key: '2-1',
        label: '文章管理',
        url: Paths.articleList,
      },
      {
        icon: 'upload',
        key: '2-2',
        label: '发表文章',
        url: Paths.addArticle,
      },
    ],
  },
  {
    icon: 'book',
    key: '3',
    label: '文章来源',
    children: [
      {
        icon: 'form',
        key: '3-1',
        label: '文章来源列表',
        url: Paths.articleSource,
      },
    ],
  },
  {
    icon: 'message',
    key: '4',
    label: '说说',
    children: [
      {label: '说说管理', url: '/admin/edit-say', icon: 'form', key: '4-1'},
      {label: '发表说说', url: '/admin/add-say', icon: 'upload', key: '4-2'}
    ],
  },
  {
    icon: 'file-add',
    key: '5',
    label: '收藏',
    children: [
      {
        icon: 'form',
        key: '5-1',
        label: '收藏管理',
        url: '/admin/edit-collect'
      },
      {
        icon: 'upload',
        key: '5-2',
        label: '添加收藏',
        url: '/admin/add-collect'
      }
    ],
  }
];

export default menuList;