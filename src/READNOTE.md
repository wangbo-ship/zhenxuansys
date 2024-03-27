<!--
 * @Author: wangbo
 * @Date: 2024-03-08 01:41:59
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-27 23:32:12
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

# 项目其他业务

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

- 背景色、主题按钮颜色：elementplus提供了方法

- 登录

  - 业务：登录成功之后获取token存store中 在localstorage中也存一份 request的请求拦截每次从本地去除token放到请求头中 当请求其他接口时可以根据请求头中的token进行校验身份
  （具体看：store下的user.ts）

- 退出
  退出时 $router.push({path:'/login',query:{redirect:$route.path}) 携带一个退出时当前页面的path 下次登录的时候可以重定向到上次退出的页面

- 路由守卫 permission.ts 1.全局前置守卫是指在路由切换之前触发的钩子函数，可以用来进行一些全局的前置操作，比如登录验证、权限控制等。2.路由独享的守卫和组件内的守卫是针对具体路由或组件的，用于处理特定路由或组件的生命周期事件

  - 登录成功了就不能随意跳回登录页
  - 没登陆的时候不能随意进主页
  - 路由切换时用户信息丢失(因为路由切换会销毁state)
  - token过期情况
  - 路由切换时显示进度条 ---pnpm i nprogress
  - 路由鉴权

- 配置代理跨域
  let env = loadEnv(mode,process.cwd());
  server: {
  proxy: {
  [env.VITE_APP_BASE_API]: {
  //获取数据的服务器地址设置
  target: env.VITE_SERVE,
  //需要代理跨域
  changeOrigin: true,
  //路径重写
  rewrite: (path) => path.replace(/^\/api/, ''),
  }
  }
  }

# 项目主要业务分类说明

- 关键是对业务逻辑的理解和细节的注意
- 第一：全局配置和准备工作、路由搭建、代码工程化
- 第二：大屏可视化（echarts、布局）
- 第三：登录、权限和角色分配（核心）
- 第四：增删改查业务(数据的展示、处理和收集)
- 总结：跨域、TS类型约束、全局/自定义组件和组件通信、git、部署上线、(布局方式、性能优化)

## - 第二:大屏可视化布局

- 最重要的：适配问题
- 解决方式：
  -1.c3的vw/wh(类似rem) 兼容IE8+ 但是vm vh不支持文字 文字只能px
  -2.c3的transform的scale()可以对元素进行放大缩小 缺点是左右上下可能留白 本项目用的scale方法
  let screen = ref()
  onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
  })
  //定义大屏缩放比例
  function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w
  const wh = window.innerHeight / h
  return ww < wh ? ww : wh
  }
  //监听视口变化
  window.onresize = () => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
  }
- echarts
  - 获取实例容器
  - 配置项
    //标题组件
    title: {
    text: '水球图',
    },
    //x|y轴组件
    xAxis: {},
    yAxis: {},
    //系列:决定你展示什么样的图形图标
    series: {
    type: 'liquidFill', //系列
    data: [0.6, 0.4, 0.2], //展示的数据
    waveAnimation: true, //动画
    animationDuration: 3,
    animationDurationUpdate: 0,
    radius: '100%', //半径
    outline: {
    //外层边框颜色设置
    show: true,
    borderDistance: 8,
    itemStyle: {
    color: 'skyblue',
    borderColor: '#294D99',
    borderWidth: 8,
    shadowBlur: 20,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    },
    },
    },
    //布局组件
    grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    },

## - 第三：权限和角色分配

- 业务：可以对用户进行增删改查和分配角色、可以增删改角色、可以设置角色访问和操作的权限
- 注意：

  - 1.用户管理修改用户信息的时候 如果自己改自己要回退到登录 但是要手动刷新---再保存的时候window.location.reload()浏览器自动刷新一次 这个回退的逻辑再permisson.ts中 具体：全局前/后置守卫:项目当中任意路由切换都会触发的钩子
    - (1)首先检测token存在否 来判断用户是否登录 如果无Token则未登录 此时若访问登录页方行 若访问其他页面重定向到登录页
    - (2)如果token存在则用户登录了 此时直接放行到主页 然后判断是否存在用户信息 获取用户信息的api在路由守卫中进行 用户信息存在则放行 用户信息不存在则发送用户信息请求 如果得到则放行 如果得不到则token造假手动删除token然后重定向到登录
  - 2.角色管理中的角色权限分配是关键 通过树形控件进行控制 可以控制菜单的访问权限 也可以控制不同模块下不同按钮的操作权限---根据角色id获取该角色的权限信息(多维数组)前端展示第一层数组的name和内部children
    (1)显示勾选与否取决于select字段 根据select过滤出最内层的id(收集select为true的最内层的id)
    过滤用到递归
    const filterSelectArr = (allData: any, initArr: any) => {
    allData.forEach((item: any) => {
    if (item.select && item.level == 4) {
    initArr.push(item.id);
    }
    if (item.children && item.children.length > 0) {
    filterSelectArr(item.children, initArr);
    }
    })
    return initArr;
    }
    (2)用户分配权限 首先获取tree组件实例 运用组件的api收集选中结点和半选父节点的id 将两个id合并成数组成为参数传递给后端 分配完之后要reload刷新更新当前菜单和权限(针对修改自己的权限情况)

  - 3.核心重点：
    (1)路由分析
    一、目前整个项目一共多少个路由
    login(登录页面)、
    404(404一级路由)、
    任意路由、
    首页(/home)、
    数据大屏、
    权限管理(三个子路由)
    商品管理模块(四个子路由)

        1.1开发菜单权限
        ---第一步:拆分路由
        静态(常量)路由:大家都可以拥有的路由
        login、首页、数据大屏、404

        异步路由:不同的身份有的有这个路由、有的没有
        权限管理(三个子路由)
        商品管理模块(四个子路由)

        任意路由:任意路由

    (2)菜单权限
      1.2菜单权限开发思路
      admin在创建用户分配权限的时候 就相当于给用户信息的data里面添加了routes和buttons数组来标明该用户可以访问的菜单和按钮
      根据routes对异步路由进行过滤 最后将过滤后的异步路由和常量路由合并
      function filterAsyncRoute(asnycRoute, routes) {
          return asnycRoute.filter(item => {
              if (routes.includes(item.name)) {
                  if (item.children && item.children.length > 0) {
                      item.children = filterAsyncRoute(item.children, routes)
                  }
                  return true
              }
          })
      }
      注意两个问题 
      1.第一是要对异步路由进行深拷贝 可以下载lodash(js常用的数组库)用cloneDeep方法 这样避免了下一个用户登录在过滤异步路由的时候是上一个用户过滤时残留的异步路由
      之前在user的仓库的actions里面调用获取用户信息的api 在这里面成功获取信息之后 还要过滤当前用户的异步路由
      let userAsyncRoute = filterAsyncRoute(cloneDeep(asyncRoute),result.data.routes)
      过滤完毕之后 还要动态追加过滤后的动态路由和任意路由的注册(当前只注册了常量路由router/index.ts)
      2.因为是动态追加注册的router.addRoute(route) 所以在异步路由的页面刷新可能出现白屏(因为还没有加载完毕就访问了)
      解决这个问题 就在守卫permission中解决 如果有用户信息则next({...to})这种写法相当于加载完之后再方行
        
    (2)按钮权限
      根据用户信息返回的buttons数组在每个按钮的地方v-if判断一下有没有对应的字段来控制显示 如果是v-if那么每个有按钮的组件都要import用户的仓库(因为用户信息的buttons存在userStore中) 可以考虑用自定义指令src/serective/has 如果在用户信息buttons数组当中没有就直接从dom树上干掉
      
## - 第四：增删改查业务(数据的展示、处理和收集)

- 上传注意：

  - upload组件属性:action图片上传路径书写/api,代理服务器不发送这次post请求

- 添加和修改细节

  - 根据响应式对象中传不传id来分辨dialog框的title是添加还是修改 虽然添加无需传id但每次点击添加的时候先清除对象 这里面还要包括id的清除（防止上次操作是修改 对象里面遗留了id）
  - 添加前要清除上次表单校验的提示信息 需要用到el-form的clearValidate方法 但是刷新页面后第一次无法通过ref获取到el-form的实例 因为此时模板元素渲染到页面但可能并未挂载 所以第一次取到的实例可能是undefined 解决：nextTick

- 深浅拷贝

  - 浅拷贝Object.assign(obj1,obj2)拷贝的是地址 不同obj指向同一个地址
  - 深拷贝obj2=JSON.parse(JSON.stringify(obj1)相当于两个对象独立 深层复制

- spu(类) sku(实例)---此模块主要是数据量比较大 本质还是何时发请求 数据的展示和收集问题
  扩充一种传参方式 ：父组件中通过ref拿到子组件的实例 子组件中defineExpose()自己的方法和属性(默认setup语法糖是不暴露的) 然后父组件通过子组件实例调用子组件方法和属性 父可向子传参
  补充另一种传参方式：v-model可以实现父子组件通信 子组件中要设置一个value属性
  可说点1.用v-show来切换场景 这样父元素可以顺利拿到子组件的实例 因为他只是隐藏了
  2.//路由组件销毁前，情况仓库关于分类的数据
  onBeforeUnmount(() => {
  categoryStore.$reset()
  })

# git的回退

- #查看提交历史，找到要回退的提交的 SHA-1 标识符
  git log

  #回退到上一次提交，但保留更改
  (这里是回退到上次 HEAD 指向最新的提交 HEAD^ 就指向倒数第二次提交。也可以回退到指定地方 那就把HEAD^改为标识符)
  git reset --soft HEAD^

  #更改提交消息
  git commit --amend -m "新的提交消息"

  #强制推送更改的提交到远程仓库
  (使用 git push --force 命令强制推送更改到远程仓库会覆盖远程仓库中的历史记录，可能会影响其他人的工作 解决：git push --force-with-lease，它会先检查远程分支是否与你本地分支同步，只有在本地分支落后于远程分支时才会执行强制推送)
  git push --force

# 项目上线
  