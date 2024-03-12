/*
 * @Author: wangbo
 * @Date: 2024-03-11 14:29:48
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-11 14:30:08
 * @Description: https://github.com/wangbo-ship/zhenxuansys
 */
//常量路由
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', //命名路由 将来权限要用到
  },
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'layout', //命名路由 将来权限要用到
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404', //命名路由 将来权限要用到
  },
  //任意路由 重定向到404
  {
    //pathMatch 获取匹配的路径信息。
    //例如，如果访问的 URL 是 http://example.com/some/path，
    // 那么 :pathMatch 参数的值将是 /some/path。
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
