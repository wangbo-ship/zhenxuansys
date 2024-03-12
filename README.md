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

- axios二次封装 主要是为了添加请求和相应拦截器 常用的工具性文件一般放utils

- API接口统一管理 api文件夹下 根据不同业务建立不同文件夹分别管理

# 项目

- 配置路由 src/router/index.ts
