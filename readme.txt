初始化
1. vue ui 创建项目
2.安装element-ui axios node-sass sass sass-loader库
3.在main.js中引入element axios库.
4.创建/assets/css,添加color.scss global.scss style.scss
5.添加vue.config.js文件,在里面配置好css,js,imgs文件别名,方便使用.
6.删除views文件下面不需要的视图,清理components里面默认的组件,清理App.vue文件中的代码.
7.创建components/login/Login.vue文件,并且在router/index.js中引入,并设置好路由.

login页面:
1.设置模板,引入style.scss样式文件
2.el-form > el-form-item > el-input
3.用:model给表单绑定数据model, :rules设置好对应的验证规则
4.给input 用v-model绑定对应的属性
5.添加 /components/Home.vue文件,并且在路由中设置好对应的跳转路由 this.router.push('/home')
