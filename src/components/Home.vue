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
            <el-aside>

            </el-aside>
            <!-- 内容展示区域 -->
            <el-main>

            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        // 退出登录
        logout () {
            // 清除token
            window.sessionStorage.clear()
            // 返回登录页
            this.$router.push('/login')
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
</style>