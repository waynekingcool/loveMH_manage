<template>
    <div class="login_container">
        <div class="login-box">
            <!-- logo -->
            <div class="login-box-avator-box">
                <img src="../../assets/imgs/zelda.jpg" alt="">
            </div>
            <!-- 登录form -->
            <el-form ref="loginFormRef" label-width="80px" class="login-box-form" :model="loginModel" :rules="loginRules">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginModel.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginModel.password"></el-input>
                </el-form-item>
                <el-form-item class="login-box-form-btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            loginModel: {
                username: 'zhangsan',
                password: '123'
            },
            // 验证规则
            loginRules: {
                username: [
                    { required: true, message: '请输入登录名称', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在3-10个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入登录密码', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在3-10个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        // 登录
        login: function () {
            this.$refs.loginFormRef.validate(async valid => {
                if (!valid) return
                const { data: res } = await this.$http.post('api/user/login', {
                    userName: this.loginModel.username,
                    password: this.loginModel.password
                })
                if(res.errno == 0) {
                    this.$message({
                        message: '登录成功',
                        type: 'success'
                    })
                    //保存token
                    window.sessionStorage.setItem('token', res.data)
                    // 跳转到首页
                    this.$router.push('/home')
                }else {
                    this.$message({
                        message: res.message,
                        type: 'error'
                    })
                }
                
            })
        },
        // 重置
        reset: function () {
            this.$refs.loginFormRef.resetFields()
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@css/style.scss';
    .login_container{
        background-color: $lovelyYellow;
        height: 100%;
    }
    .login-box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 450px;
        height: 300px;
        background-color: #fff;
        &-avator-box {
            width: 130px;
            height: 130px;
            border: 1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: #fff;
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #fff;
            }
        }
        &-form {
            position: absolute;
            width: 100%;
            padding: 0 20px;
            bottom: 0;
            box-sizing: border-box;
            &-btns {
                display: flex;
                justify-content: flex-end;
            }
        }
    }
</style>