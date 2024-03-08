# note文档

- git push时 443:Timed out ---尝试cmd ipconfig /flushdns 刷新DNS

- eslint配置 ---针对js的语法检测工具

- prettier配置 ---格式化工具

- stylelint配置 ---css语法检查与格式化工具

- husky配置 ---强制按照规范来提交 husky在代码提交之前触发 git在客户端配置的钩子

- commitlint配置 ---远程提交规范配置 在husky中也配置一份 在提交远程时自动执行
    -'feat',//新特性、新功能
    -'fix',//修改bug
    -'docs',//文档修改
    -'style',//代码格式修改, 注意不是 css 修改
    -'refactor',//代码重构
    -'perf',//优化相关，比如提升性能、体验
    -'test',//测试用例修改
    -'chore',//其他修改, 比如改变构建流程、或者增加依赖库、工具等
    -'revert',//回滚到上一个版本
    -'build',//编译相关的修改，例如发布版本、对项目构建或者依赖的改动
    如：git commit -m "feat: 配置commitlint"

- scripts/preinstall配置 ---统一包管理工具 可以保证下载依赖版本统一 本项目统一pnpm