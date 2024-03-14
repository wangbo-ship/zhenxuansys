/*
 * @Author: wangbo
 * @Date: 2024-03-11 14:29:48
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-14 19:46:41
 * @Description: 路由表
 */
//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', //命名路由 将来权限要用到
    meta: {
      title: '登录', //菜单标题
      hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: 'Promotion', //菜单文字左侧的图标,支持element-plus全部图标
    },
  },
  {
    //登录成功以后展示数据的路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '',
      hidden: false,
      icon: '',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      hidden: false,
      title: '数据大屏',
      icon: 'Platform',
    },
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    meta: {
      title: '权限管理',
      icon: 'Lock',
      hidden: false,
    },
    redirect: '/acl/user',
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'User',
        meta: {
          title: '用户管理',
          icon: 'User',
          hidden: false,
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          icon: 'UserFilled',
          hidden: false,
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          icon: 'Monitor',
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'Product',
    meta: {
      title: '商品管理',
      icon: 'Goods',
      hidden: false,
    },
    redirect: '/product/trademark',
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/brand/index.vue'),
        name: 'Trademark',
        meta: {
          title: '品牌管理',
          icon: 'ShoppingCartFull',
          hidden: false,
        },
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          icon: 'ChromeFilled',
          hidden: false,
        },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'Spu',
        meta: {
          title: 'SPU管理',
          icon: 'Calendar',
          hidden: false,
        },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'Sku',
        meta: {
          title: 'SKU管理',
          icon: 'Orange',
          hidden: false,
        },
      },
    ],
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
      icon: 'DocumentDelete',
    },
  },
]

//异步路由
// export const asnycRoute = [
//   {
//     path: '/acl',
//     component: () => import('@/layout/index.vue'),
//     name: 'Acl',
//     meta: {
//       title: '权限管理',
//       icon: 'Lock',
//     },
//     redirect: '/acl/user',
//     children: [
//       {
//         path: '/acl/user',
//         component: () => import('@/views/acl/user/index.vue'),
//         name: 'User',
//         meta: {
//           title: '用户管理',
//           icon: 'User',
//         },
//       },
//       {
//         path: '/acl/role',
//         component: () => import('@/views/acl/role/index.vue'),
//         name: 'Role',
//         meta: {
//           title: '角色管理',
//           icon: 'UserFilled',
//         },
//       },
//       {
//         path: '/acl/permission',
//         component: () => import('@/views/acl/permission/index.vue'),
//         name: 'Permission',
//         meta: {
//           title: '菜单管理',
//           icon: 'Monitor',
//         },
//       },
//     ],
//   },
//   {
//     path: '/product',
//     component: () => import('@/layout/index.vue'),
//     name: 'Product',
//     meta: {
//       title: '商品管理',
//       icon: 'Goods',
//     },
//     redirect: '/product/trademark',
//     children: [
//       {
//         path: '/product/trademark',
//         component: () => import('@/views/product/brand/index.vue'),
//         name: 'Trademark',
//         meta: {
//           title: '品牌管理',
//           icon: 'ShoppingCartFull',
//         },
//       },
//       {
//         path: '/product/attr',
//         component: () => import('@/views/product/attr/index.vue'),
//         name: 'Attr',
//         meta: {
//           title: '属性管理',
//           icon: 'ChromeFilled',
//         },
//       },
//       {
//         path: '/product/spu',
//         component: () => import('@/views/product/spu/index.vue'),
//         name: 'Spu',
//         meta: {
//           title: 'SPU管理',
//           icon: 'Calendar',
//         },
//       },
//       {
//         path: '/product/sku',
//         component: () => import('@/views/product/sku/index.vue'),
//         name: 'Sku',
//         meta: {
//           title: 'SKU管理',
//           icon: 'Orange',
//         },
//       },
//     ],
//   },
// ]

//任意路由 重定向到404
export const anyRoute = {
  //pathMatch 获取匹配的路径信息。
  //例如，如果访问的 URL 是 http://example.com/some/path，
  // 那么 :pathMatch 参数的值将是 /some/path。
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  name: 'Any',
  meta: {
    title: '任意路由',
    hidden: true,
    icon: 'DataLine',
  },
}

//常量路由
// export const constantRoute = [
//   {
//     path: '/login',
//     component: () => import('@/views/login/index.vue'),
//     name: 'login', //命名路由 将来权限要用到
//   },
//   {
//     path: '/',
//     component: () => import('@/layout/index.vue'),
//     name: 'layout', //命名路由 将来权限要用到
//   },
//   {
//     path: '/404',
//     component: () => import('@/views/404/index.vue'),
//     name: '404', //命名路由 将来权限要用到
//   },
//   //任意路由 重定向到404
//   {
//     //pathMatch 获取匹配的路径信息。
//     //例如，如果访问的 URL 是 http://example.com/some/path，
//     // 那么 :pathMatch 参数的值将是 /some/path。
//     path: '/:pathMatch(.*)*',
//     redirect: '/404',
//     name: 'Any',
//   },
// ]
