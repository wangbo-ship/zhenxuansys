# note文档

- git push时 443:Timed out ---尝试cmd ipconfig /flushdns 刷新DNS

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
  在不同环境的配置文件中 定义相应的配置变量 变量必须以 VITE_ 为前缀才能暴露给外部读取
  - 通过 import.meta.env 获取环境变量
  - 在package.json中添加配置运行命令
    - "build:test": "vue-tsc && vite build --mode test",
    - "build:pro": "vue-tsc && vite build --mode production",

- 集成SVG 在项目中svg矢量图几乎不占用资源 
  - 保存svg图片后可以封装一个svg组件 在需要用到的地方引入传参即可
  - 本项目封装在components/SvgIcon/index.vue


