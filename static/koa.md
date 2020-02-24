###基本操作
### 1.初始化项目
    npm init -y
 ### 2.安装koa及其他插件
#####  1.安装Koa

     npm i koa 
#####  2.引入并实例koa

     const Koa = require('koa');
     const app = new Koa();
    
#####  3.监听端口

     app.listen(3000,()=>console.log('server started'));

#####  4.安装nodemon`

     npm i nodemon 
    //配置package.json设置启动命令 

    "scripts": {
    "dev": "node app.js"
    }

#####  5.引入koa-json,用于格式化json对象的格式`

     npm i koa-json
     const json = require('koa-json');
     app.use(json())

#####  6.配置路由，安装路由，路由的使用

    npm i koa-router
    const koaRouter = require('koa-router');
    const router = new koaRouter();

    // 对于任何请求，app 将调用该异步函数处理请求：
    app.use(async(ctx, next) => {
       await next();
       ctx.response.type = 'text/html';
       ctx.response.body = '<h1>Hello, koa2!</h1>';
    });

    app.use(async ctx => {
    ctx.body = 'Hello World';
    });


#####  7.加入模板引擎ejs

    npm i ejs
    const path = require('path');
    const render = require('koa-ejs');

  配置渲染的引擎路径和配置路由跳转；

    // 配置模板引擎
    render(app,{
	root:path.join(__dirname,'views'),
	      layout:'layout',
	      viewExt:'html',
	      cache:false,
	      debug:false
     })
    //模拟数据
    const things = [{name:'apple'},{name:banana'},{name:orange'}]; 

     // 路由跳转
     router.get("/",index)
     router.get('/add',showAdd)
    // 函数声明
    async function index(ctx){
	await ctx.render('index',{
		title:'this is index2',
		things:things
	    })
      }
    async function showAdd(ctx){
	await ctx.render('add',{
		title:'this is index211',
	     })
     }

#####  8.在server文件夹下新建文件夹views

  `新建index.html;`
  `新建layouts.html;`
  `新建add.html`
`在views文件夹下新建template文件夹，下面新建nav.html;`

###### html文件具体内容；

index.html

    <h1>
	  <%- title %>
	</h1>
	<ul>
	  <% things.forEach(thing=>{ %>
	  <li>
	    <%= thing.name %>
	  </li>
	  <% }) %>
	</ul>

layout.html

    <!DOCTYPE html>
	<html>
	<head>
	  <title>things app</title>
	  <meta charset="utf-8">
	  <!-- 引入了bootstrap样式 -->
	  <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
	</head>
	<body>
	  <% include templates/nav.html %>
	  <div class="container">
	    <%- body %>
	  </div>
	</body>
	</html>

add.html

    <h1 class="display-4 mb-4">
	  添加
	</h1>
	<form action="add" method="POST">
	  <div class="form-group">
	    <input type="text" name="thing" class="form-control form-control-lg">
	  </div>
	  <input type="submit" name="" value="添加" class="btn btn-dark btn-lg">
	  <a href="/" class="btn btn-danger btn-lg">取消</a>
	</form>

nav.html

    <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">things</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
          <li><a href="#">Link</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="/add">添加</a></li>
        </ul>
      </div>
    </div>
    </nav>

#####  9 启动项目 

      npm run dev

#####  10 效果展示
##### ejs模板渲染出来的内容
![index.html](https://upload-images.jianshu.io/upload_images/13341275-0d4aa3b4628ae14f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![nav.html](https://upload-images.jianshu.io/upload_images/13341275-1f24d9539f8d49c3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 单击 `添加`，切换渲染的路由`
![add.html](https://upload-images.jianshu.io/upload_images/13341275-9155d85120906efb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

github地址：https://github.com/zhanhongzhu/node.js-koa-ejs-.git





















