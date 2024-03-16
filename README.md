<!--
 * @Author: wangbo
 * @Date: 2024-03-08 01:41:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-16 17:01:15
 * @Description: https://github.com/wangbo-ship/zhenxuansys
-->

# 笔记文档

- git push时 443:Timed out或者 OpenSSL SSL_read: Connection was reset, errno 10054
  - 尝试cmd ipconfig /flushdns 刷新DNS 或者如下再push
    - git config --global https.proxy 127.0.0.1:本机vpn端口
    - git config --global http.proxy 127.0.0.1:本机vpn端口

# 项目配置

- eslint配置 ---针对js的语法检测工具

- prettier配置 ---格式化工具

- stylelint配置 ---css语法检查与格式化工具

- husky配置 ---强制按照规范来提交 husky在代码提交之前触发 git在客户端配置的钩子

- commitlint配置 ---远程提交规范配置 在提交远程时自动执行husky配置
  ---eg：git commit -m "feat: 配置commitlint"

- scripts/preinstall配置 ---统一包管理工具 可以保证下载依赖版本统一 本项目统一pnpm

- 使用elementplus国际化 注意打包问题 @ts-ignore消除ts检测才能正常build

- 环境变量的配置 ---不同阶断对应的接口和服务器往往不同 配置环境变量方便开发中切换

  - development 开发环境 .env.development
  - testing 测试环境 .env.test
  - production 生产环境 .env.production
    在不同环境的配置文件中 定义相应的配置变量 变量必须以 VITE\_ 为前缀才能暴露给外部读取
  - 通过 import.meta.env 获取环境变量
  - 在package.json中添加配置运行命令
    - "build:test": "vue-tsc && vite build --mode test",
    - "build:pro": "vue-tsc && vite build --mode production",

- 集成SVG 在项目中svg矢量图几乎不占用资源

  - 保存svg图片后可以封装一个svg组件 在需要用到的地方引入传参即可
  - 本项目封装在 components/SvgIcon/index.vue

- 统一注册全局组件

  - main.ts中可Vue.component()注册全局组件 但随着全局组件的增多 统一注册更为合理
  - 本项目中 components存放全局组件 components/index.ts运用自定义插件（应用场景：全局注册） 自定义插件的install方法第一个参数是vm 方法体内部可以注册全局组件、全局指令，V2中还可以注册全局过滤器、全局混入等
  - 也可以使用"withInstall"方法。这个方法通常是一个工厂函数，接受一个Vue组件作为参数，并返回一个新的Vue组件，这个新的组件会自动注册到Vue实例中。

- 集成scss ---本项目styles文件夹中集成了scss全局样式

  - Sass和Scss都具有相同的功能和特性，只是语法格式不同
  - Sass使用的是缩进式语法
  - Scss使用了大括号 {} 和分号 ; 来标记代码块和属性

- 集成mock接口测试 ---官网下载mock插件后按要求在vite.config.ts中配置 可使用mock文件夹下的测试接口

- axios二次封装 主要是为了添加请求和相应拦截器 常用的工具性文件一般放utils (utils中一般存公共的方法--全局方法、二次封装等)

- API接口统一管理 api文件夹下 根据不同业务建立不同文件夹分别管理

# 项目

- 登陆后左侧菜单组件用到了递归组件:根据路由表递归生成

- 伸缩扩展按钮：

  - 引入仓库layoutsettingstore 共享开关状态
  - class="{ fold: layOutSettingStore.fold ? true : false }"
  - &.fold { width: $base-menu-min-width }
  - transition: all 0.3s;-动画
  - el-menu上面设置折叠后悬浮显示路由collapse

- 面包屑：

  - 根据$route.matched来v-for渲染路由中的meta里的属性

- 刷新按钮
  - 本质：销毁对应的路由组件 然后重新创建(重新向服务器发请求渲染数据)
  - 实现：组件a点击刷新的时候store中refsh取反 组件b监听store中的refsh变化并执行回调
  - 用到nextTick：nextTick 方法接收一个回调函数作为参数，这个回调函数会在 DOM更新之后被调用

- 登录
  - 业务：登录成功之后获取token存store中 在localstorage中也存一份 request的请求拦截每次从本地去除token放到请求头中 当请求其他接口时可以根据请求头中的token进行校验身份 

- 退出
  退出时 $router.push({path:'/login',query:{redirect:$route.path}}) 携带一个退出时当前页面的path 下次登录的时候可以重定向到上次退出的页面

- 路由守卫 permission.ts
  1.全局前置守卫是指在路由切换之前触发的钩子函数，可以用来进行一些全局的前置操作，比如登录验证、权限控制等。
  2.路由独享的守卫和组件内的守卫是针对具体路由或组件的，用于处理特定路由或组件的生命周期事件
  - 登录成功了就不能随意跳回登录页
  - 没登陆的时候不能随意进主页
  - 路由切换时用户信息丢失(因为路由切换会销毁state)
  - token过期情况
  - 路由切换时显示进度条 ---pnpm i nprogress
  - 路由鉴权
  