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

home页面:
1.用于展示后台数据
2.使用element-ui框架的el-container el-aside el-main组件进行展示.
3.点击退出按钮删除session中的token,然后跳转到login页面.
4.点击侧边栏菜单显示对应的内容,并且需要记录当前点击的path.

User页面:
1.用于展示用户列表
2.使用el-upload组件上传图片,该组件对于各种状态皆有对应的钩子函数,success error delete等等
3.使用el-dialog组件显示添加用户界面,在el-dialog中插入el-form组件该表单组件绑定userModel,并且设置好ref属性,和添加校验规则addUserRules.
4.使用el-switch组件用来处理isAdmin属性,该属性有change方法,在里面获取改变的值.
5.使用el-table组件展示数据,el-table-column展示字段数据,如果需要在里面插入组件,可以使用template标签,加入slot-scope="scope",scope.row代表该行数据.