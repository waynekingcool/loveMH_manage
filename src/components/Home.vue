<template>
    <el-container class="home-container">
        <!-- 头部 -->
        <el-header>
            <div>
                <img src="../assets/imgs/zelda.jpg" alt="">
                <span>万斌的博客后台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!-- 内容 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside width="200px">
                <el-menu
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#409EFF"
                :unique-opened="true"
                router
                :default-active="activePath"
                >
                    <el-submenu :index="item.id" v-for="(item, index) in menuList" :key="index">
                        <template slot="title">
                            <i class="el-icon-service"></i>
                            <span>{{ item.titleName }}</span>
                        </template>
                        <el-menu-item v-for="(subItem, subIndex) in item.children" :key="subIndex" :index="subItem.path"
                        @click="saveActivePath(subItem.path)"
                        >
                            {{ subItem.titleName }}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!-- 内容展示区域 -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data () {
        return {
            // 侧边栏数据
            menuList: [
                {
                    id: '1',
                    titleName: '用户管理',
                    children: [
                        {
                            id: '1-1',
                            titleName: '用户列表',
                            path: '/users'
                        }
                    ]
                },
                {
                    id: '2',
                    titleName: '测试',
                    children: [
                        {
                            id: '2-1',
                            titleName: '测试2222',
                            path: '/test'
                        }
                    ]
                }
            ],
            activePath: ''
        }
    },
    created () {
        // 获取之前选中的菜单
        this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods: {
        // 退出登录
        logout () {
            // 清除token
            window.sessionStorage.clear()
            // 返回登录页
            this.$router.push('/login')
        },
        // 保存激活的path
        saveActivePath (path) {
            this.activePath = path
            window.sessionStorage.setItem('activePath', path)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@css/style.scss';
    .home-container{
        height: 100%;
    }

    .el-header {
        background-color: #373d41;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color: white;

        div {
            display: flex;
            align-items: center;
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            span {
                margin-left: 20px;
            }
        }
    }

    .el-aside {
        background-color: #333744;
        .el-menu {
            border-right: 1px;
        }
    }

    .el-main {
        background-color: #eaedf1;
    }
</style>