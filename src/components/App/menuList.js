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
        icon: 'bars',
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
    label: '文章类型',
    children: [
      {
        icon: 'bars',
        key: '3-1',
        label: '文章类型列表',
        url: Paths.articleSource,
      },
      {
        icon: 'form',
        key: '3-2',
        label: '编辑文章类型',
        url: Paths.editArticleSource,
      },
    ],
  },
  {
    icon: 'user',
    key: '4',
    label: '用户管理',
    children: [
      {
        icon: 'bars',
        key: '4-1',
        label: '用户列表',
        url: Paths.userList,
      },
      {
        icon: 'edit',
        key: '4-2',
        label: '新增用户',
        url: ''
      },
      {
        icon: 'edit',
        key: '4-3',
        label: '修改用户',
        url: '',
      }
    ],
  }
  // {
  //   icon: 'message',
  //   key: '4',
  //   label: '说说',
  //   children: [
  //     {label: '说说管理', url: '/admin/edit-say', icon: 'form', key: '4-1'},
  //     {label: '发表说说', url: '/admin/add-say', icon: 'upload', key: '4-2'}
  //   ],
  // },
  // {
  //   icon: 'file-add',
  //   key: '5',
  //   label: '收藏',
  //   children: [
  //     {
  //       icon: 'form',
  //       key: '5-1',
  //       label: '收藏管理',
  //       url: '/admin/edit-collect'
  //     },
  //     {
  //       icon: 'upload',
  //       key: '5-2',
  //       label: '添加收藏',
  //       url: '/admin/add-collect'
  //     }
  //   ],
  // }
];

export default menuList;