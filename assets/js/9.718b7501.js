(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{293:function(t,e,i){},336:function(t,e,i){"use strict";var s=i(293);i.n(s).a},341:function(t,e,i){"use strict";i.r(e);i(50),i(51),i(27);var s=i(47),o={data:function(){return Object(s.a)({steps:0,scrolltop:0,floorOne:0,floorTwo:0,floorThree:0,floorFour:0,floorFive:0,webType:[],floorArr:[],rcolor:["#ff7488","#b5ff8a","#6db9ff","#c277ff","#4139ff"],active:0,sidebarDiv:document.querySelector(".sidebar"),pageDiv:document.querySelector(".page"),pageTitle:document.querySelector(".page-title"),contentDiv:document.querySelector(".content__default"),comments:document.querySelector(".comments-wrapper"),imgList:[{image:"http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408111959_2837.png"},{image:"http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408112010_4489.png"},{image:"http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408113102_1595.png"},{image:"http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408113048_1276.png"},{image:"http://images.baixingliangfan.cn/firstCategoryPicture/20180408/20180408112053_8191.png"},{image:"http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175040_1780.jpg"},{image:"http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175111_9509.jpg"},{image:"http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175142_6947.jpg"}]},"webType",[{title:"fe",type:"前端框架",list:[{title:"React",desc:"用于构建用户界面的 JavaScript 库",contribute:"https://github.com/reactjs/zh-hans.reactjs.org",url:"https://react.docschina.org",is_docschina:!0},{title:"Vue",desc:"渐进式 JavaScript 库",contribute:"https://github.com/vuejs/cn.vuejs.org/",url:"https://vue.docschina.org"},{title:"Angular",desc:"一套框架多种平台",url:"https://angular.cn/"},{title:"iview小程序组件网址",url:"https://weapp.iviewui.com/"},{title:"three.js动画网站",url:"http://oatthegoat.co.nz/"},{title:"Bootstrap-vue",url:"https://bootstrap-vue.js.org/"},{title:"react-easyui",url:"https://git.c2cloud.cn/liqiao/react-easyui.git"},{title:"swiper组件网址",url:"https://surmon-china.github.io/vue-awesome-swiper/"},{title:"ant react.js组件库",url:"https://ant.design/docs/react/introduce-cn"},{title:"bootstrap-vue网址",url:"https://bootstrap-vue.js.org/"},{title:"jQuery表格生成插件",url:"http://www.jq22.com/jquery-info10649"},{title:"Vue表格组件element-ui",url:"https://element.eleme.cn/2.9/#/zh-CN/component/table 表格组件"},{title:"Vue表格组件iview ",url:"https://iviewui.com/components/table 表格组件"},{title:"Vue表格组件vxe-table ",url:"https://xuliangzhan.github.io/vxe-table/#/table/base/basic 表格组件，支持增删改查、海量数据"},{title:"Vue表格组件cheetah-grid ",url:"https://future-architect.github.io/cheetah-grid/ 表格组件，支持编辑，海量数据"},{title:"Vue表格组件gridmanager ",url:"http://gridmanager.lovejavascript.com/ 表格组件"},{title:"Vue表格组件vue-tables-2 ",url:"https://github.com/matfish2/vue-tables-2 表格组件"},{title:"Vue表格组件vuetable-2 ",url:"https://github.com/ratiw/vuetable-2 表格组件"},{title:"Vue表格组件ej2-vue-grids ",url:"https://github.com/syncfusion/ej2-vue-ui-components 表格组件"},{title:"Vue表格组件vue-easytable ",url:"https://github.com/huangshuwei/vue-easytable 表格组件，支持编辑"},{title:"Vue表格组件@handsontable/vue ",url:"https://github.com/handsontable/vue-handsontable-official 表格组件，支持增删改查"},{title:"Vue表格组件vue-element-extends ",url:"https://github.com/xuliangzhan/vue-element-extends 基于 element-ui 的表格，支持增删改查、海量数据"},{title:"Vue表格组件el-data-table ",url:"https://femessage.github.io/el-data-table/ 基于 element-ui 的表格"},{title:"Vue表格组件el-bigdata-table ",url:"https://github.com/code-farmer-i/el-bigdata-table 基于 element-ui 的表格，支持海量数据"}]},{title:"mini-program",type:"小程序框架",list:[{title:"Remax",desc:"Remax 将 React 运行在小程序环境中，让你可以使用完整的 React 进行小程序开发。",url:"https://remaxjs.org/",contribute:"https://github.com/remaxjs/remax"},{title:"Taro",desc:"Taro 是一套遵循 React 语法规范的 多端开发 解决方案。",url:"https://taro.jd.com/",contribute:"https://github.com/NervJS/taro"},{title:"kbnoe",desc:"kbnoe 用于支持一个项目可以同时在 Web 端和小程序端被使用",url:"https://developers.weixin.qq.com/miniprogram/dev/extended/kbone/",contribute:"https://github.com/wechat-miniprogram/kbone"},{title:"omi/omip",desc:"Omi 可以开发桌面 Web、移动 H5，同时支持开发小程序",url:"http://omijs.org",contribute:"https://github.com/Tencent/omi"},{title:"wepy",desc:"WePY 是一款让小程序支持组件化开发的框架，通过预编译的手段让开发者可以选择自己喜欢的开发风格去开发小程序",url:"https://developers.weixin.qq.com/miniprogram/dev/extended/kbone/",contribute:"https://github.com/Tencent/wepy"},{title:"nanachi",desc:"基于 React 的多端小程序转译框架，完美兼容 React 生命周期",url:"https://rubylouvre.github.io/nanachi/",contribute:"https://github.com/RubyLouvre/nanachi"},{title:"mpvue",desc:"框架基于 Vue.js 核心，mpvue 修改了 Vue.js 的 runtime 和 compiler 实现，使其可以运行在小程序环境中，从而为小程序开发引入了整套 Vue.js 开发体验。",url:"http://mpvue.com",contribute:"https://github.com/Meituan-Dianping/mpvue"},{title:"wxa",desc:"wxa 是一个 AOP 框架，主要使用 Decorator（运行时改写，拦截）和预编译实现框架功能。",url:"https://wxajs.github.io/wxa/",contribute:"https://github.com/wxajs/wxa"},{title:"mpx",desc:"Mpx 是一款致力于提高小程序开发体验的增强型小程序框架，通过 Mpx，我们能够以最先进的 web 开发体验来开发生产性能深度优化的小程序。",url:"https://didi.github.io/mpx/",contribute:"https://github.com/didi/mpx"},{title:"megalo",desc:"Megalo 是基于 Vue（Vue@2.6.6） 的小程序开发框架，让开发者可以用 Vue 的开发方式开发小程序应用。",logo:"https://megalojs.org/static/megalo.png",url:"https://megalojs.org/#/",contribute:"https://github.com/kaola-fed/megalo"},{title:"chameleon",desc:"Chameleon/kəˈmiːlɪən/，简写CML，中文名卡梅龙；中文意思变色龙，意味着就像变色龙一样能适应不同环境的跨端整体解决方案。",logo:"https://camo.githubusercontent.com/9a6e165b9188a8ac4e5173bc382688a418fad711/68747470733a2f2f636d6c2e6a732e6f72672f646f632f6173736574732f3130302a3130302e706e67",url:"https://cml.js.org/",contribute:"https://github.com/didi/chameleon"},{title:"uni-app",desc:"框架基于 Vue.js 核心，mpvue 修改了 Vue.js 的 runtime 和 compiler 实现，使其可以运行在小程序环境中，从而为小程序开发引入了整套 Vue.js 开发体验。",logo:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png",url:"https://uniapp.dcloud.io/",contribute:"https://github.com/dcloudio/uni-app"}]},{title:"react-pc",type:"React 生态（PC）",list:[{is_docschina:!0,title:"Preact",desc:"React 的 3kb 轻量化方案，拥有同样的 ES6 API",url:"https://preactjs.com/",contribute:"https://github.com/docschina/preact-www"},{is_docschina:!0,title:"React-Router",desc:"官方维护的路由库",url:"https://react-router.docschina.org/",contribute:"https://github.com/docschina/react-router.cn"},{title:"Umi",desc:"可插拔的企业级 React 应用框架",logo:"",url:"https://umijs.org/",contribute:"https://github.com/umijs/umi"},{title:"dva",desc:"基于 React 和 redux，具有 elm 风格的轻量级框架。",logo:"",url:"https://dvajs.com/",contribute:"https://github.com/dvajs/dva"},{title:"Ant Design",team:"阿里巴巴",desc:"企业级的 UI 设计语言和 React 实现",url:"https://ant.design/",repository:"https://github.com/ant-design/ant-design"},{title:"Ant Design Pro",team:"阿里巴巴",desc:"开箱即用的中台前端/设计解决方案",url:"https://pro.ant.design/",repository:"https://github.com/ant-design/ant-design-pro"},{title:"Ant Design Pro (Vue)",team:"阿里巴巴",desc:"开箱即用的中台前端/设计解决方案",logo:"https://pro.loacg.com/logo.png",url:"https://pro.loacg.com/",repository:"https://github.com/sendya/ant-design-pro-vue"},{title:"Element React",team:"饿了么",desc:"Element UI 的 React 实现",url:"https://elemefe.github.io/element-react/",repository:"https://github.com/eleme/element-react"},{title:"Zent",team:"有赞",desc:"PC 端 WebUI 规范的 React 实现，提供了一整套基础的 UI 组件以及一些常用的业务组件",url:"https://www.youzanyun.com/zanui/zent",repository:"https://github.com/youzan/zent"},{title:"Nerv",team:"京东",desc:"Nerv 是一款基于虚拟 DOM 技术的 JavaScript（TypeScript）库，它提供了与 React 16 一致的使用方式与 API，并且拥有更高的性能表现、更小的包大小以及更好的浏览器兼容性",logo:"https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67",url:"https://nerv.aotu.io/",repository:"https://github.com/NervJS/nerv"},{title:"路由react-router",url:"https://github.com/ReactTraining/react-router"},{title:"布局    @rebass/grid react-blocks react-flexbox-grid",url:"https://github.com/roylee0704/react-flexbox-grid"},{title:"拖拽    react-beautiful-dnd react-dnd react-sortable-hoc",url:"https://github.com/atlassian/react-beautiful-dnd/"},{title:"代码编辑器    react-codemirror2 react-monaco-editor",url:"https://github.com/react-monaco-editor/react-monaco-editor"},{title:"富文本编辑器    react-quill braft-editor",url:"https://github.com/margox/braft-editor"},{title:"JSON 显示器    react-json-view",url:"https://github.com/mac-s-g/react-json-view"},{title:"拾色器    rc-color-picker react-color",url:"http://casesandberg.github.io/react-color/"},{title:"响应式    react-responsive react-media",url:"https://github.com/ReactTraining/react-media"},{title:"复制到剪贴板    react-copy-to-clipboard",url:"https://github.com/nkbt/react-copy-to-clipboard"},{title:"页面 meta 属性    react-helmet react-document-title",url:"https://github.com/gaearon/react-document-title"},{title:"图标    react-fa react-icons",url:"https://github.com/react-icons/react-icons"},{title:"二维码    qrcode.react",url:"https://github.com/zpao/qrcode.react"},{title:"可视化图表    BizCharts recharts victory",url:"https://github.com/FormidableLabs/victory"},{title:"可视化图编辑器    GGEditor",url:"https://github.com/alibaba/GGEditor"},{title:"顶部进度条    nprogress",url:"https://github.com/rstacruz/nprogress"},{title:"应用国际化    react-intl",url:"https://github.com/formatjs/react-intl"},{title:"代码高亮    react-syntax-highlighter",url:"https://github.com/conorhastings/react-syntax-highlighter"},{title:"Markdown 渲染    react-markdown",url:"http://rexxars.github.io/react-markdown/"},{title:"无限滚动    react-virtualized antd-table-infinity",url:"https://github.com/Leonard-Li777/antd-table-infinity"},{title:"地图    react-google-maps google-map-react react-amap 高德",url:"https://github.com/ElemeFE/react-amap"},{title:"右键菜单    react-contextmenu react-contexify",url:"https://github.com/fkhadra/react-contexify"},{title:"Emoji    emoji-mart",url:"https://github.com/missive/emoji-mart"},{title:"分割面板    react-split-pane",url:"react-split-pane"},{title:"图片裁切    react-image-crop",url:"https://github.com/DominicTobias/react-image-crop"},{title:"趋势线    react-sparklines",url:"https://github.com/borisyankov/react-sparklines"},{title:"格式化输入    text-mask",url:"https://github.com/text-mask/text-mask"},{title:"关键字高亮    react-highlight-words",url:"https://github.com/bvaughn/react-highlight-words"},{title:"动画    react-move Ant Motion react-spring",url:"https://motion.ant.design/components/tween-one"}]},{title:"react-mobile",type:"React 生态（Mobile）",list:[{title:"React Native",desc:"基于 React 的移动端跨平台 UI",url:"https://reactnative.cn/",repository:"https://github.com/reactnativecn/react-native.cn"},{title:"Ant Design Mobile",team:"阿里巴巴",desc:"一个基于 Preact / React / React Native 的 UI 组件库",url:"https://mobile.ant.design/",repository:"https://github.com/ant-design/ant-design-mobile"},{title:"Pile",team:"滴滴",desc:"移动端 React 组件库",logo:"",url:"https://didi.github.io/pile.js",repository:"https://github.com/didi/pile.js"}]},{title:"vue-pc",type:"Vue 生态（PC）",list:[{title:"Element UI",team:"饿了么",desc:"基于 Vue 的组件库",url:"http://element-cn.eleme.io/",repository:"https://github.com/ElemeFE/element"},{title:"iView UI",team:"TalkingData",desc:"基于 Vue 的组件库",url:"https://www.iviewui.com/",repository:"https://github.com/iview/iview"},{title:"Vue UI Framework",desc:"Vue 官方 UI 组件",url:"https://vuejs.github.io/ui/",repository:"https://github.com/vuejs/ui"},{title:"Vuetify",desc:"基于 Vue 的 Material 组件库",url:"https://vuetifyjs.com/zh-Hans/",repository:"https://github.com/vuetifyjs/vuetify"},{title:"vue-beauty",desc:"Ant Design 的 Vue 实现",url:"https://fe-driver.github.io/vue-beauty",repository:"https://github.com/FE-Driver/vue-beauty"},{title:"antue",desc:"Ant Design 的 Vue 实现",url:"https://zzuu666.github.io/antue",repository:"https://github.com/zzuu666/antue"},{title:"Muse-UI",desc:"基于 Vue 和 Material Design 的 UI 组件库",url:"http://www.muse-ui.org/",repository:"https://github.com/museui/muse-ui"},{title:"Vue-Blu",desc:"Vue-Blu 是基于 Vue 和 Bulma 开发的开源 UI 组件库",url:"https://chenz24.github.io/vue-blu",repository:"https://github.com/chenz24/vue-blu"},{title:"HeyUI",desc:"一个基于 Vue 的高质量 UI 组件库",logo:"https://camo.githubusercontent.com/1424cb86c2634f96fe82db55f01f07c3c29e53a1/68747470733a2f2f7777772e68657975692e746f702f7374617469632f696d616765732f6c6f676f2e706e67",url:"https://www.heyui.top/",repository:"https://github.com/heyui/heyui"},{title:"Element Admin",desc:"基于 Vue 的内容管理系统(CMS)",url:"http://panjiachen.github.io/vue-element-admin/#/",repository:"https://github.com/PanJiaChen/vue-element-admin"},{title:"iView Admin",team:"TalkingData",desc:"基于 Vue 的内容管理系统(CMS)",url:"https://iview.github.io/iview-admin/",repository:"https://github.com/iview/iview-admin"},{title:"San",team:"百度",desc:"灵活易用的 JavaScript 组件框架，兼容到 IE6",url:"https://baidu.github.io/san/",repository:"https://github.com/baidu/san"},{title:"vue-ssr",desc:"Vue 官方提供的服务器端渲染(SSR)指南",logo:"",url:"https://ssr.vuejs.org/zh/",repository:"https://github.com/vuejs/vue-ssr-docs"},{title:"vue-loader",desc:"vue-loader 可以将 Vue 单文件组件转换为 JavaScript 模块的 webpack loader",logo:"",url:"https://vue-loader.vuejs.org/zh/",repository:"https://github.com/vuejs/vue-loader"},{title:"webpack template",logo:"",desc:"针对大型 Vue 项目的 webpack 样例(boilerplate)",url:"https://vuejs-templates.github.io/webpack/",repository:"https://github.com/vuejs-templates/webpack"},{title:"Vue 企业级样例",logo:"",desc:"通过 Vue CLI 3 创建出来，为全新的 Vue SPA 项目所设计，不断发展、具有远见的架构和开发环境。",url:"https://github.com/chrisvfritz/vue-enterprise-boilerplate"},{is_docschina:!0,title:"VuePress",logo:"https://vuepress.docschina.org/hero.png",desc:"由 Vue 提供支持的静态站点生成器",url:"https://vuepress.docschina.org",contribute:"https://github.com/docschina/vuepress"},{title:"vue-router",desc:"vue-router 是 Vue 官方提供的 router",logo:"",url:"https://router.vuejs.org/zh/",repository:"https://github.com/vuejs/vue-router"},{title:"vue-rx",desc:"vue-rx 帮助用户在 Vue 应用程序中实现简单的 RxJS 绑定",logo:"",url:"https://github.com/vuejs/vue-rx/blob/master/README-CN.md",repository:"https://github.com/vuejs/vue-rx"},{title:"vue-cli",desc:"vue-cli 帮助用户快速开发 Vue 的脚手架(scaffold)",url:"https://cli.vuejs.org/zh/",repository:"https://github.com/vuejs/vue-cli"},{title:"Nuxt.js",desc:"Vue.js 元框架，用于快速创建复杂、高性能的通用 Web 应用程序",logo:"https://zh.nuxtjs.org/logos/nuxt-icon.png",url:"https://zh.nuxtjs.org/",repository:"https://github.com/nuxt/nuxt.js"}]},{title:"vue-mobile",type:"Vue 生态（Mobile）",list:[{title:"Lavas",team:"百度",desc:"基于 Vue 的 PWA 解决方案",url:"https://lavas.baidu.com/",repository:"https://github.com/lavas-project/lavas"},{title:"Mint UI",team:"饿了么",desc:"基于 Vue 的组件库",url:"http://mint-ui.github.io/",repository:"https://github.com/ElemeFE/mint-ui"},{title:"Vant",team:"有赞",desc:"移动端 Vue 组件库",url:"https://www.youzanyun.com/zanui/vant",repository:"https://github.com/youzan/vant"},{title:"Cube UI",team:"滴滴",desc:"基于 Vue 实现的精致移动端组件库",url:"https://didi.github.io/cube-ui/",repository:"https://github.com/didi/cube-ui"},{title:"Mand Mobile",team:"滴滴",desc:"面向金融场景的 Vue 移动端组件库",url:"https://didi.github.io/mand-mobile/",repository:"https://github.com/didi/mand-mobile"},{title:"Mand Mobile",team:"滴滴",desc:"可视化 Mand Mobile 主题编辑器",url:"https://mand-mobile.github.io/palette/",repository:"https://github.com/mand-mobile/palette"},{title:"VUX",desc:"基于 Vue 的移动端组件库",url:"https://vux.li/",repository:"https://github.com/airyland/vux"},{title:"YDUI",desc:"基于 Vue 的移动端 & 微信 UI 组件库",url:"http://vue.ydui.org/",repository:"http://github.com/ydcss/vue-ydui"},{title:"Weex",team:"阿里巴巴",desc:"基于 Vue 的移动端跨平台 UI",url:"https://weex.apache.org/",repository:"https://github.com/apache/incubator-weex"}]},{title:"angular",type:"Angular 生态",list:[{title:"Element Angular",team:"饿了么",desc:"Element UI 的 Angular 实现",url:"https://element-angular.faas.ele.me/",repository:"https://github.com/ElemeFE/element-angular"},{title:"Ioinc",desc:"基于 Angular 的移动端跨平台 UI",url:"https://ionicframework.com/",repository:"https://github.com/ionic-team/ionic"},{title:"NG-ZORRO",desc:"Ant Design 的 Angular 实现",url:"https://ng.ant.design/",repository:"https://github.com/NG-ZORRO/ng-zorro-antd"},{title:"ng-alain",desc:"基于 ng-zorro-antd 的中台前端解决方案",url:"http://ng-alain.com/",repository:"https://github.com/cipchk/ng-alain/"}]},{title:"node",type:"Node.js 生态",list:[{is_docschina:!0,title:"Koa",desc:"新一代的 Web 后台框架",url:"https://koajs.docschina.org/",contribute:"https://github.com/demopark/koa-docs-Zh-CN"},{title:"ThinkJS",team:"360",desc:"能够使用完整 ES6/7 特性进行开发的 Node.js 应用程序",url:"https://thinkjs.org/",repository:"https://github.com/thinkjs/thinkjs"},{title:"egg",team:"阿里巴巴",desc:"为企业级框架和 Node.js & Koa 应用程序而生",url:"https://eggjs.org/",repository:"https://github.com/eggjs/egg"},{title:"Express",desc:"快速极简的 Web 框架",url:"http://expressjs.com/zh-cn/",repository:"https://github.com/expressjs/express"},{title:"nest",desc:"A progressive Node.js framework for building efficient and scalable server-side applications, heavily inspired by Angular.",url:"https://nestjs.com/",repository:"https://github.com/nestjs/nest"},{title:"npm",desc:"npm 是 JavaScript package 管理工具，在这里可以找到可复用代码，并以强大的全新方式进行聚合",url:"https://docs.npmjs.com/"},{title:"cnpm",logo:"https://npm.taobao.org/favicon.png",desc:"淘宝提供的 npmjs.org 镜像",url:"https://npm.taobao.org/"},{title:"yarn",desc:"快速、可靠和安全的依赖管理",url:"https://yarnpkg.com/zh-Hans/"}]},{title:"css",type:"CSS 生态",list:[{title:"Sass",desc:"Sass 是 CSS 的一个扩展，它使 CSS 的使用起来更加优雅和强大。",url:"https://sass-guidelin.es/zh/"},{title:"Less",desc:"Less 是 CSS 预处理语言，使 CSS 更易维护和扩展",url:"http://lesscss.cn/"},{title:"Stylus",desc:"富有表现力、动态、健壮的 CSS",url:"http://www.zhangxinxu.com/jq/stylus/",homeBackup:"http://stylus-lang.com/"},{is_docschina:!0,title:"PostCSS",desc:"通过 JavaScript 来转换 CSS，并且提供强大的插件生态系统",url:"http://postcss.docschina.org/",contribute:"https://github.com/docschina/postcss/blob/cn/Translation.md"},{title:"20款绚丽按钮动画效果",url:"https://tympanus.net/Development/ButtonStylesInspiration/"},{title:"渐变背景生成",url:"https://uigradients.com/#BradyBradyFunFun"},{title:"底纹生成网站：Subtle Patterns",url:"https://www.toptal.com/designers/subtlepatterns/"},{title:"图片hover动画效果",url:"https://www.html5tricks.com/demo/css3-image-mouse-hover/index.html"},{title:"特效网址",url:"http://www.html580.com/11522"},{title:"css-tricks",url:"https://css-tricks.com/"}]},{title:"standard",type:"语言文档和规范",list:[{is_docschina:!0,title:"Node.js",desc:"基于 V8 引擎的 JS 运行环境",url:"http://nodejs.cn/",contribute:"https://github.com/nodejscn/node-api-cn"},{title:"MDN",logo:"https://developer.mozilla.org/static/img/favicon144.e7e21ca263ca.png",desc:"提供 Web 技术文档，学习 Web 开发的最佳实践",url:"https://developer.mozilla.org/zh-CN/docs/Web"},{is_docschina:!0,title:"ECMAScript",desc:"ECMAScript 2018 标准",url:"https://ecma262.docschina.org/",contribute:"https://github.com/docschina/ecma262"},{title:"GraphQL",desc:"一种用于 API 的查询语言",url:"http://graphql.cn/",contribute:"https://github.com/xitu/graphql.github.io"},{title:"OpenAPI",desc:"OpenAPI 规范为 RESTful API 定义了一个与语言无关的标准接口",url:"https://swagger.io/docs/specification/about/",contribute:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md"},{title:"JSON Schema",desc:"JSON Schema 是一个词汇表，可以验证、注释和操作 JSON 文档",url:"http://json-schema.org/",contribute:"https://github.com/json-schema-org/json-schema-spec"},{title:"腾讯前端导航",url:"http://www.alloyteam.com/nav/"},{title:"腾讯前端团队",url:"http://alloyteam.com/"},{title:"学习网站",url:"http://www.deathghost.cn/"},{title:"腾讯前端团队",url:"http://alloyteam.github.io/"},{title:"稀土掘金",url:"https://juejin.im/"},{title:"印记中文",url:"https://www.docschina.org/"},{title:"koa2中文网",url:"https://www.itying.com/koa/"},{title:"easy-mock 网址",url:"https://www.easy-mock.com/login"},{title:"淘宝npm 包",url:"http://npm.taobao.org/package/react-router-dom"},{title:"vue-markdown",url:"https://github.com/hinesboy/mavonEditor"},{title:"我的腾讯云",url:"https://console.cloud.tencent.com/cvm"},{title:"w3c工具中心",url:"https://123.w3cschool.cn/webtools"},{title:"w3c在线编辑器",url:"https://www.w3cschool.cn/tryrun/runcode?lang=html"},{title:"腾讯开发者平台",url:"https://dev.tencent.com/user/tasks?owner=2357919"},{title:"vue—-typescript",url:"https://github.com/kaorun343/vue-property-decorator"},{title:"JavaScript中文网",url:"https://www.javascriptcn.com/"},{title:"渡一开发中心",url:"https://developer.duyiedu.com/home"},{title:"javascript学习网站",url:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classesv"},{title:"express使用网站",url:"http://www.expressjs.com.cn/starter/generator.html"},{title:"vue-particles 粒子特效",url:"https://vue-particles.netlify.com/"},{title:"结构树",url:"http://www.treejs.cn/v3/api.phpv"},{title:"videojs.js",url:"http://coderlt.coding.me/2016/02/26/videojs-readme/"},{title:"配置api工场",url:"https://www.kancloud.cn/thundersword/fire-shop-lite/936356"}]},{title:"codestyle",type:"代码风格检查",list:[{title:"ESLint",desc:"可组装的、用于 JavaScript 和 JSX 的代码检查工具",url:"https://cn.eslint.org/"},{is_docschina:!0,title:"StyleLint",desc:"强大的现代 CSS 检测工具，帮助样式表遵循一致的约定和避免错误",url:"https://stylelint.docschina.org/",contribute:"https://github.com/docschina/stylelint"},{title:"Standard JS",desc:"JavaScript 风格指南、检查工具和格式化工具",url:"https://standardjs.com/"},{title:"Vue 风格指南",desc:"Vue 代码的风格指南",url:"https://vue.docschina.org/v2/style-guide/"}]},{title:"data-model",type:"状态管理",list:[{is_docschina:!0,title:"Mobx",desc:"简单、可扩展的状态管理",url:"https://cn.mobx.js.org/",contribute:"https://github.com/SangKa/mobx-docs-cn"},{title:"Redux",desc:"JavaScript 状态容器，提供可预测化的状态管理",url:"https://cn.redux.js.org/",contribute:"https://github.com/camsong/redux-in-chinese"},{title:"Rematch",desc:"Rematch 是没有 boilerplate 的 Redux 最佳实践",url:"https://rematch.gitbook.io/",contribute:"https://github.com/rematch/rematch"},{title:"Vuex",desc:"vuex 是 Vue 官方提供的状态管理工具",url:"https://vuex.vuejs.org/zh/",repository:"https://github.com/vuejs/vuex"}]},{title:"tutorial",type:"编程教程",list:[{is_docschina:!1,title:"现代 JavaScript 教程",desc:"以最新的 JavaScript 标准为基准，通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。",logo:"https://user-images.githubusercontent.com/26959437/67275005-3df25500-f4f4-11e9-9c13-36e442ff40cc.jpg",url:"https://zh.javascript.info/",contribute:"https://github.com/javascript-tutorial/zh.javascript.info"},{is_docschina:!0,title:"RxJS 5 基本原理",desc:"本书是 RxJS 的初中级书，适用于任何想要入门 RxJS 的开发者",url:"https://rxjs-cn.github.io/rxjs5-ultimate-cn/",contribute:"https://github.com/RxJS-CN/rxjs5-ultimate-cn"},{is_docschina:!0,title:"学习 RxJS 操作符",desc:"通过每个操作符的清晰示例及解释来进行 RxJS 的学习",logo:"",url:"https://rxjs-cn.github.io/learn-rxjs-operators/",contribute:"https://github.com/RxJS-CN/learn-rxjs-operators"},{is_docschina:!0,title:"React 模式",desc:"本书介绍了使用 React 开发时的一些常用设计模式，其中包括的技术有组合(composition)、数据流、依赖管理等",url:"http://sangka-z.com/react-in-patterns-cn/",contribute:"https://github.com/SangKa/react-in-patterns-cn"},{title:"TypeScript 入门教程",desc:"从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript",url:"https://ts.xcatliu.com/",repository:"https://github.com/xcatliu/typescript-tutorial"},{title:"JavaScript Promise 迷你书",desc:"基于 Promise 进行异步编程的基本使用方法以及测试的编写方法、应用及反模式等内容的文档",logo:"",url:"http://liubin.org/promises-book/"},{is_docschina:!0,title:"RxJS 5 基本原理",desc:"本书是 RxJS 的初中级书，适用于任何想要入门 RxJS 的开发者",url:"https://rxjs-cn.github.io/rxjs5-ultimate-cn/",contribute:"https://github.com/RxJS-CN/rxjs5-ultimate-cn"},{is_docschina:!0,title:"学习 RxJS 操作符",desc:"通过每个操作符的清晰示例及解释来进行 RxJS 的学习",logo:"",url:"https://rxjs-cn.github.io/learn-rxjs-operators/",contribute:"https://github.com/RxJS-CN/learn-rxjs-operators"},{is_docschina:!0,title:"React 模式",desc:"本书介绍了使用 React 开发时的一些常用设计模式，其中包括的技术有组合(composition)、数据流、依赖管理等",url:"http://sangka-z.com/react-in-patterns-cn/",contribute:"https://github.com/SangKa/react-in-patterns-cn"}]},{title:"functional",type:"函数式编程",list:[{is_docschina:!0,title:"RxJS",desc:"RxJS 是 Reactive Extensions 的 JavaScript 实现，可以通过响应式和函数式编程模型组合异步数据流",url:"http://cn.rx.js.org/",contribute:"https://github.com/RxJS-CN/RxJS-Docs-CN/"},{title:"Cycle.js",desc:"函数式和响应式的 JavaScript 框架",url:"http://cyclejs.cn/"},{title:"Ramda",logo:"https://ramdajs.com/ramdaFilled_200x235.png",desc:"一款实用的 JavaScript 函数式编程库",url:"http://ramda.cn/"}]},{title:"test",type:"测试工具",list:[{title:"Vue Test Utils",logo:"",desc:"Vue Test Utils 是 Vue.js 官方的单元测试实用工具库",url:"https://vue-test-utils.vuejs.org/zh/",repository:"https://github.com/vuejs/vue-test-utils"},{title:"Jest",desc:"Facebook 开发的零配置测试平台，让代码库更加稳定和健壮",url:"https://jestjs.io/",repository:"https://github.com/facebook/jest"},{title:"ava",desc:"未来的测试运行器",url:"https://github.com/avajs/ava"},{title:"Karma",desc:"Karma 的主要目标是，让测试驱动开发(TDD)变得简单、快速和有趣。",url:"https://karma-runner.github.io/2.0/index.html",repository:"https://github.com/karma-runner/karma"},{title:"Mocha",desc:"Mocha 是运行在 Node.js 和浏览器上的功能丰富的 JavaScript 测试框架，使异步测试变得简单而有趣。Mocha 串行运行测试，提供灵活精准的报告，同时将未捕获的异常映射到正确的测试用例。",url:"https://mochajs.org/",repository:"https://github.com/mochajs/mocha"},{title:"Jasmine",desc:"Jasmine 是一个用于测试 JavaScript 代码的行为驱动开发(BDD)框架",url:"https://jasmine.github.io/",repository:"https://github.com/jasmine/jasmine"},{title:"Puppeteer",desc:"Puppeteer 可以通过 DevTools 协议控制 headless Chrome 或 Chromium",url:"https://pptr.dev/",repository:"https://github.com/GoogleChrome/puppeteer"},{title:"Sinon.JS",desc:"用于对 JavaScript 隔离测试 spy, stub 和 mock。适用于任何单元测试框架",url:"http://sinonjs.org/",repository:"https://github.com/sinonjs/sinon"},{title:"Chai",desc:"Chai 是一个用于 Node.js 和浏览器的 BDD/TDD 断言库，可以与任何 JavaScript 测试框架便捷配对",url:"http://chaijs.com/",repository:"https://github.com/chaijs/chai"},{title:"expect",logo:"",desc:"expect 帮助你编写更好的断言",url:"https://github.com/mjackson/expect"},{title:"Should.js",logo:"",desc:"一个富于表现力、可读性强、与框架无关，用于 Node.js 的 BDD 风格断言库",url:"https://shouldjs.github.io/",repository:"https://github.com/shouldjs/should.js"},{title:"Mock.js",logo:"",desc:"生成随机数据，拦截 Ajax 请求",url:"http://mockjs.com/",repository:"https://github.com/nuysoft/Mock"}]},{title:"build",type:"编译构建",list:[{is_docschina:!0,title:"webpack",desc:"用于现代 JavaScript 应用程序的静态模块打包工具",url:"https://webpack.docschina.org/",contribute:"https://github.com/docschina/webpack.js.org"},{is_docschina:!0,title:"Parcel",desc:"零配置打包工具",homeBackup:"https://www.parceljs.io/",url:"https://parceljs.docschina.org/",contribute:"https://github.com/docschina/parceljs.io"},{is_docschina:!0,title:"Rollup",desc:"新一代 JavaScript 模块打包器",url:"https://rollup.docschina.org/",contribute:"https://github.com/docschina/rollupjs.org"},{is_docschina:!0,title:"Babel",imgStyle:{objectFit:"contain"},desc:"一个编译工具，让你可以项目中直接使用下一代 JavaScript",homeBackup:"https://babeljs.cn/",url:"https://babel.docschina.org/",contribute:"https://github.com/docschina/babeljs.io"},{title:"TypeScript",desc:"JavaScript 超集",url:"https://zhongsp.gitbooks.io/typescript-handbook/",repository:"https://github.com/zhongsp/TypeScript"},{title:"Gulp",desc:"基于流的自动化构建工具",url:"http://www.gulpjs.com.cn/"},{title:"Grunt",desc:"JavaScript 世界的构建工具",url:"https://grunt.docschina.org/"},{title:"Lerna",desc:"用于管理有多个包的 JavaScript 项目的工具",url:"https://lernajs.io/",repository:"https://github.com/lerna/lerna"}]},{title:"template",type:"模板引擎",list:[{title:"EJS",logo:"",desc:"JavaScript 模板引擎",url:"http://ejs.co/"},{title:"Pug",logo:"",desc:"JavaScript 模板引擎",url:"https://pugjs.org/"},{title:"Handlebars.js",logo:"",desc:"JavaScript 模板引擎",url:"https://handlebarsjs.com/"}]},{title:"visualization",type:"可视化工具",list:[{is_docschina:!0,title:"Threejs",desc:"JavaScript 3d 库",url:"https://threejs.docschina.org/",repository:"https://github.com/mrdoob/three.js",contribute:"https://github.com/docschina/threejs.org"},{title:"ECharts",team:"百度",desc:"使用 JavaScript 实现的开源可视化库",url:"http://echarts.baidu.com/",repository:"https://github.com/ecomfe/echarts"},{title:"SpriteJS",team:"360",desc:"跨平台的轻量级 2D 渲染对象模型",url:"http://spritejs.org/",repository:"https://github.com/spritejs/spritejs"},{title:"AntV 可视化解决方案",team:"阿里巴巴",desc:"基于全新一代数据可视化解决方案 AntV",url:"https://antv.alipay.com/",repository:"https://github.com/ecomfe/echarts"},{title:"G2 可视化图形语法",team:"阿里巴巴",desc:"一套基于可视化编码的图形语法，以数据驱动，具有高度的易用性和扩展性",url:"https://antv.alipay.com/",repository:"https://github.com/antvis/g2/"},{title:"G6 关系图类库",team:"阿里巴巴",desc:"G6 是解决流程图和关系分析的图表库",url:"https://antv.alipay.com/zh-cn/g6/1.x/index.html",repository:"https://github.com/antvis/g6/"},{title:"F2 移动端图表库",team:"阿里巴巴",desc:"面向移动端的一套基于可视化图形语法的图表库，具有精简、高性能、易扩展的特性",url:"https://antv.alipay.com/zh-cn/f2/3.x/index.html",repository:"https://github.com/antvis/f2/"},{title:"D3.js",desc:"一个遵循 Web 标准，用于可视化数据的 JavaScript 库",url:"https://d3js.org.cn/",repository:"https://github.com/xswei/d3js_doc"},{title:"v-charts",team:"饿了么",logo:"https://github.com/ElemeFE/v-charts/raw/master/examples/favicon.ico",desc:"基于 Vue 和 ECharts 封装的图表组件",url:"https://v-charts.js.org/",repository:"https://github.com/elemefe/v-charts"}]},{title:"utils",type:"utils 工具",list:[{title:"jQuery",desc:"高效精简强大的工具库",url:"http://www.jquery123.com/"},{title:"Zepto",desc:"轻量级的工具库",url:"http://zeptojs.com/"},{title:"Lodash",desc:"一个现代的 JavaScript 工具库",url:"http://lodash.think2011.net/"},{is_docschina:!0,title:"markdown-it",logo:"",desc:"Markdown 解析器。完全支持 CommonMark 规范，并且进行语法扩展、提供可编写插件和快速编译",url:"https://markdown-it.docschina.org/",repository:"https://github.com/markdown-it/markdown-it",contribute:"https://github.com/LinFeng1997/markdown-it-docs"},{is_docschina:!0,title:"localForage",desc:"通过简单类似 localStorage API 的异步数据存储来改进你的 Web 应用程序的离线体验",url:"https://localforage.docschina.org/",contribute:"https://github.com/xmoyking/localForage-cn"},{title:"jQuery API",desc:"jQuery API 速查表",url:"http://hemin.cn/jq/"}]},{title:"tool",type:"其他工具",list:[{title:"XGPlayer",team:"今日头条",desc:"带解析器、能节省流量的 Web 视频播放器",url:"https://h5player.bytedance.com/",repository:"https://github.com/bytedance/xgplayer"},{title:"Chimee",team:"360",desc:"奇舞团研制的 h5 播放器，它支持 mp4、m3u8、flv 等多种格式",url:"http://chimee.org/",repository:"https://github.com/Chimeejs/chimee"},{title:"flv.js",team:"哔哩哔哩",desc:"HTML5 视频播放器以纯 JavaScript 编写，不含 Flash",logo:"",url:"https://github.com/Bilibili/flv.js"},{title:"360站长工具",url:"http://zhanzhang.so.com/sitetool/sitemap"},{title:"百度信誉官网",url:"https://trust.baidu.com/vstar/official/intro?type=gw"},{title:"百度搜索资源平台",url:"https://ziyuan.baidu.com/linksubmit/index"},{title:"在线压缩代码",url:"http://tool.oschina.net/jscompress/"},{title:"清除多余的CSS",url:"https://uncss-online.com/"},{title:"代码调试工具",url:"https://codepen.io/laoyao/pen/gOYgGYj"},{title:"熊猫在线压缩图片软件",url:"https://tinypng.com/"}]},{title:"weekly",type:"技术周刊",list:[{is_docschina:!0,title:"印记中文周刊",desc:"将 JavaScript Weekly 摘要部分翻译出来，帮助大家了解国外前沿技术信息",url:"http://weekly.docschina.org/"},{title:"JavaScript Weekly",desc:"JavaScript 新闻和文章",url:"https://javascriptweekly.com/"},{title:"Node Weekly",logo:"",desc:"Node.js 新闻和文章",url:"https://nodeweekly.com/"},{title:"CSS Weekly",logo:"https://css-weekly.com/wp-content/themes/cssweekly/img/cssweekly-logo.png",desc:"CSS 文章、教程、实验、工具等摘要",url:"https://css-weekly.com/"},{title:"Vue news",desc:"Vue 官方提供的最新实时动态资讯",url:"https://news.vuejs.org/",repository:"https://github.com/vuejs/news.vuejs.org"}]},{type:"精美网站",list:[{title:"精美日本摄影网站",url:"https://curiousokinawa.com/group-tour/"},{title:"顺为资本",url:"http://shunwei.com/"},{title:"青柳子本家网址",url:"https://www.aoyagiuirou.co.jp/"},{title:"日本顶级精美网站",url:"https://www.xuansite.com/"},{title:"精美网站",url:"https://shopcounter.jp/"}]},{type:"学习博客",list:[{title:"博客仿站",url:"http://matsudo-yasashii-labo.jp/about"},{title:"技术胖博客",url:"http://www.jspang.com/"},{title:"学习博客",url:"https://yezipi.net/"},{title:"vuex状态管理",url:"https://www.cnblogs.com/chinabin1993/p/9848720.html"},{title:"我的csdnblog",url:"https://www.cnblogs.com/zhanhongzhu/"},{title:"koa2练习文档",url:"https://mp.weixin.qq.com/s/YyNBtXPFp5JGzPrERcXZeA"},{title:"部署应用到腾讯云",url:"https://segmentfault.com/a/1190000010432654"},{title:"蚂蚁部落",url:"http://www.softwhy.com/article-1798-1.html"},{title:"vue 显示 markdown 文件",url:"https://www.jianshu.com/p/c324711f12b5"},{title:"在vue中使用highlight代码高亮",url:"https://segmentfault.com/a/1190000008188461"},{title:"注册或者登录参考",url:"https://github.com/stzhongjie/vue-login"},{title:"react.js小书",url:"http://huziketang.mangojuice.top/books/react/lesson2"},{title:"学习 React.js 比你想象的要简单",url:"https://juejin.im/post/599156cc6fb9a03c3a25db08"},{title:"网站",url:"http://www.zhystar.com/"},{title:"安装vue-markdown",url:"https://www.jianshu.com/p/f4025f6989cb"},{title:"学习博客",url:"https://blog.lcylove.cn/"},{title:"学习博客",url:"https://www.cnblogs.com/qdlhj/category/1327331.html"},{title:"koa+mongoose实现简单增删改查接口",url:"https://www.cnblogs.com/junhua/p/7714572.html"},{title:"面试学习",url:"https://www.kancloud.cn/hanxuming/vue-iq/736494"},{title:"前端预渲染",url:"https://www.cnblogs.com/kdcg/p/9606302.html"},{title:"vue极客公园微信分享",url:"http://www.geekpark.net/news/247110?from=groupmessage"},{title:"阮一峰博客地址",url:"https://wangdoc.com/javascript/basic/introduction.html"},{title:"易闻有道云",url:"http://note.youdao.com/noteshare?id=c7ff3e7fe8cfd8c8685564e58441d5dc"},{title:"小程序有道云笔记",url:"http://note.youdao.com/noteshare?id=c7ff3e7fe8cfd8c8685564e58441d5dc"},{title:"高级前端学习网站",url:"https://muyiy.vip/question/"},{title:"vue 项目总结和前端学习笔记",url:"https://www.kancloud.cn/wsj-/vue/645840"},{title:"学习博客",url:"https://magicly.me/"},{title:"图像处理的滤镜算法",url:"https://juejin.im/post/5b9e127df265da0a9a395e01"},{title:"社区小程序接口",url:"https://docs.qq.com/doc/DWWF0S09tZ3B0aHVL?opendocxfrom=admin"},{title:"外包社区页面小程序",url:"https://org.modao.cc/app/1c768c77eb5dde985a632c3e7a5a8267"},{title:"vue项目如何引入babel-polyfill ",url:"https://segmentfault.com/q/1010000012736467"},{title:"柳枝小程序接口文档",url:"https://www.eolinker.com/#/share/project/api/?groupID=-1&shareCode=f9WBxf&shareToken=$2y$10$Yv8dyObBzyXgDcBPRqyukOOu8DFsYwkV63KfWpDC1emr4pYUUf9iW&shareID=174959"},{title:"鑫生活博客",url:"https://www.zhangxinxu.com/wordpress/2012/08/css-svg-filter-image-grayscale/"},{title:"易闻选科",url:"https://note.youdao.com/ynoteshare1/index.html?id=431119a6a0691df6bcf448cc7853cbff&type=note&from=groupmessage"}]},{type:"代码仓库",list:[{title:"github",url:"https://github.com/"},{title:"G码云",url:"https://gitee.com/"},{title:"gitlab",url:"https://git.c2cloud.cn/fenggao.li/withyact/branches"}]},{type:"科创相关",list:[{title:"公司前端技术资产",url:"http://antdoc.c2cloud.cn/index-cn"},{title:"新柳枝行动官网",url:"http://www.symedicine.cn"},{title:"新柳枝行动后台",url:"http://www.symedicine.cn/withyact/"},{title:"欢瑞世纪",url:"http://www.hryscm.cn/test/"},{title:"科创后台网址",url:"http://172.17.80.42:31388/#/funcs/navigation"},{title:"柏宝海外健康",url:"https://www.probio-mc.com"},{title:"高新创投网站地址",url:"https://zhanhongzhu.gitee.io/hightec"},{title:"我的博客地址",url:"https://zhanhongzhu.gitee.io"},{title:"科创统一管理门户",url:"http://amp.dev.c2cloud.cn/#/dashboard/newAdmin"},{title:"柳枝行动后端管理登录",url:"https://www.liuzhixingdong.com/withyact/"},{title:"柳枝行动测试版",url:"https://zhanhongzhu.gitee.io/willow/"},{title:"柳枝网站测试地址",url:"https://www.liuzhixingdong.com/withyact_web"},{title:"公司日志",url:"https://project.c2cloud.cn/#/workbench/teamTask"},{title:"科创erp",url:"http://172.16.168.113:8080/creatorerp/a/login"},{title:"gitLab网址",url:"https://git.c2cloud.cn/fenggao.li/withyact/branches"}]},{type:"后台管理系统",list:[{title:"粒子和后台管理特效模板库",url:"http://www.bootstrapmb.com/chajian/css3"},{title:"后台管理系统模板",url:"https://blog.csdn.net/huaairen/article/details/88649070"},{title:"amazeUI后端管理界面",url:"https://amazeui.clouddeep.cn/examples/admin-index.html"},{title:"api工厂",url:"https://api.it120.cc/fashion/banner/list"},{title:"thinkphp开源后台",url:"https://v5.thinkadmin.top/admin.html#/admin/config/info.html?spm=m-2-4-11 账号密码:admin"},{title:"api工厂商城后台",url:"https://www.it120.cc/user/apiExtShopSub/list"},{title:"vue-element-admin",url:"https://github.com/PanJiaChen/vue-element-admin"},{title:"vue-admin",url:"https://github.com/taylorchen709/vue-admin"},{title:"vue-manage-system",url:"https://github.com/lin-xin/vue-manage-system"},{title:"iview-admin",url:"https://github.com/iview/iview-admin"},{title:"vuestic-admin",url:"https://github.com/epicmaxco/vuestic-admin"},{title:"d2-admin",url:"https://github.com/d2-projects/d2-admin"}]},{type:"设计相关网址",list:[{title:"蓝湖新地址",url:"https://lanhuapp.com/url/ph8zm-EdatQ  "},{title:"蓝湖新地址",url:"https://lanhuapp.com/url/Hwl2B-yfWQI"},{title:"柳枝小程序原型图",url:"https://org.modao.cc/app/80be62d68e28b449393f90ccb5ec320c#screen=s4e7c33af6ba67af8fd8119"},{title:"banner素材网站",url:"https://818ps.com/search/0-0-0-0-0-null-34_5_0-0-0.html?user_source=r1343&route_id=15620382607720&route=3,&after_route=3"},{title:"蓝湖项目地址",url:"https://lanhuapp.com/web/#/item/project/board?pid=d8195b6a-69f4-4d6c-bcda-1294e8bc21a3"},{title:"墨刀移动端",url:"https://org.modao.cc/app/b5e5361473023dad91a0fd831ede6fe0"}]}])},created:function(){var t=this;setTimeout(function(){t.contentDiv.style.transform="none",t.pageDiv.style.backgroundColor="#b1dbee",t.pageTitle.style.display="none",t.contentDiv.style.maxWidth="1200px",t.comments.style.display="block"},1500)},mounted:function(){var t=this;for(var e in this.webType)this.webType[e].list.forEach(function(e,i){var s=t.maxRamdom();e.img=t.imgList[s].image});this.webType=this.webType;var i=this;setTimeout(function(){i.getFloorDistance(),i.getPulleyTopDistance()},1500)},methods:{anchors:function(t){var e=this;console.log(t),this.floorArr.forEach(function(i,s){switch(t){case s:e.pulleyRoll(i.Vals,e.scrolltop),e.active=s}})},pulleyRoll:function(t,e){if(e<t)var i=(t-e)/50,s=0,o=setInterval(function(){s++,console.log(e+=i),document.documentElement.scrollTop=e-200,50==s&&clearInterval(o)},10);else if(e>t)i=(e-t)/50,s=0,o=setInterval(function(){s++,console.log(e-=i),document.documentElement.scrollTop=e-200,50==s&&clearInterval(o)},10)},getFloorDistance:function(){var t=this;this.webType.forEach(function(e,i){var s=document.getElementsByClassName("floor".concat(i+1))[0].offsetTop,o={ClassName:"floor"+(i+1),Vals:s};t.floorArr.push(o)})},getPulleyTopDistance:function(){var t=this;window.onscroll=function(){t.scrolltop=document.documentElement.scrollTop||document.body.scrollTop}},randomColor:function(){return Math.floor(Math.random()*this.rcolor.length+1)},maxRamdom:function(){return Math.floor(5*Math.random()+1)}},watch:{scrolltop:function(t){(t+=200)>this.floorOne&&t<=this.floorTwo?this.steps=0:t>this.floorTwo&&t<=this.floorThree?(this.steps=1,console.log(1)):t>this.floorThree&&t<=this.floorFour?(this.steps=2,console.log(2)):t>this.floorFour&&t<=this.floorFive?(this.steps=3,console.log(3)):t>this.floor5&&(this.steps=t,console.log(4))},steps:function(t){console.log(t)}},destroyed:function(){that.contentDiv.style.transform="tanslateY(0px)",that.pageDiv.style.marginTop="5rem",that.pageDiv.style.backgroundColor="#fff",that.pageTitle.style.display="block",that.contentDiv.style.maxWidth="auto",that.comments.style.display="block"}},c=(i(336),i(1)),r=Object(c.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pd-lr0 mg-lr0",staticStyle:{"background-color":"#b1dbee"}},[i("div",{staticClass:"bv-example-row",attrs:{id:"websites"}},[i("div",[i("div",[i("div",{staticClass:"blue-bg-box"},[i("div",{staticClass:"dc-sub-menus-bg"},t._l(t.webType,function(e,s){return i("div",{staticClass:"dc-sub-menu-item",class:[t.active==s?"red":"color-334"],on:{click:function(e){return t.anchors(s)}}},[t._v(t._s(e.type))])}),0)])])])]),t._v(" "),i("div",[i("div",{staticClass:"sphere_container"},t._l(t.webType,function(e,s){return i("div",{staticClass:"floor",class:["floor"+(s+1)]},[i("div",{staticClass:"sub-category"},[i("i",{staticClass:"fa fa-home"}),t._v("\n            "+t._s(e.type)+"\n          ")]),t._v(" "),i("div",{staticClass:"fe"},t._l(e.list,function(e){return i("a",{attrs:{target:"_blank",href:e.url}},[i("div",{staticClass:"item"},[i("div",{staticClass:"logo"},[i("img",{staticClass:"loaded",attrs:{"data-original":"",src:e.logo||e.img,width:"100%"}}),t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),i("div",{staticClass:"desc"},[t._v(t._s(e.desc||e.url))])])])}),0)])}),0)])])},[],!1,null,"4d537cf5",null);e.default=r.exports}}]);