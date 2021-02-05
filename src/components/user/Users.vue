<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card>
            <!-- 添加用户,相当于注册 -->
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-input placeholder="请输入搜索的用户信息">
                        <el-button slot="append" icon="el-icon-search" @click="searchUser"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>
                </el-col>
            </el-row>
            <!-- 用户列表 -->
            <el-table :data="usersList" style="width: 100%" stripe>
                <!-- <el-table-column prop="id" label="id" width="180"></el-table-column> -->
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="userName" label="用户名" width="180"></el-table-column>
                <el-table-column prop="password" label="密码" width="180"></el-table-column>
                <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
                <el-table-column prop="avator" label="头像" width="180">
                    <template slot-scope="scope">
                        <img class="avators" :src="scope.row.avator" alt="">
                    </template>
                </el-table-column>
                <el-table-column prop="isAdmin" label="管理员" width="180">
                    <!-- 加入switch开关 -->
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.isAdmin"
                        active-color="#409eff"
                        @change="changeAdmin(scope.row.id)"
                        >
                        </el-switch>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

        <!-- 添加用户对话框 -->
        <el-dialog title="添加用户" :visible.sync="dialogVisible">
            <el-form ref="userFormRef" :model="userModel" label-width="80px" :rules="addUserRules">
                <el-form-item label="用户名称" prop="userName">
                    <el-input v-model="userModel.userName"></el-input>
                </el-form-item>
                <el-form-item label="用户密码" prop="password">
                    <el-input v-model="userModel.password"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="userModel.email"></el-input>
                </el-form-item>
                <el-form-item label="头像" prop="avator">
                    <el-upload :action="uploadURL"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :on-success="handleSuccess"
                    :on-error="handleError"
                    :headers="headerObj"
                    list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="管理员" prop="isAdmin">
                    <el-switch v-model="userModel.isAdmin"
                    active-color="#409eff"
                    @change="switchChanged"
                    >
                    </el-switch>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button>取消</el-button>
                    <el-button type="primary" @click="addUser">创建</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>


    </div>
</template>

<script>
export default {
    name: 'Users',
    created () {
        this.getAllUsers()
    },
    data () {
        return {
            // 两个上传相关的参数
            uploadURL: 'http://127.0.0.1:3000/api/utils/upload',
            headerObj: {
                Authorization: window.sessionStorage.getItem('token')
            },
            // 对话框显示状态
            dialogVisible: false,
            userModel: {
                userName: '',
                password: '',
                email: '',
                avator: '',
                isAdmin: false
            },
            // 表单验证
            addUserRules: {
                userName: [
                    { required: true, message: "请输入用户名", trigger: 'blur' },
                    { min: 3, max: 10, message: "长度为3-10个字符", trigger: 'blur' }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: 'blur' },
                    { min: 3, max: 10, message: "长度为3-10个字符", trigger: 'blur' }
                ],
                email: [
                    { required: true, message: "请输入邮箱", trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'}
                ]
            },
            // 用户列表数据
            usersList: []
        }
    },
    methods: {
        // 预览
        handlePreview (file) {

        },
        // 移除
        handleRemove (file) {

        },
        // 上传成功
        handleSuccess(response) {
            if (response.errno == 0) {
                // 上传成功 图片路径
                const imgUrl = response.data.url
                this.userModel.avator = imgUrl
            }
        },
        handleError(err) {
            this.$message({
                message: '图片上传失败' + err,
                type: 'error'
            })
        },
        // 搜索用户
        searchUser() {

        },
        // 添加用户
        addUser() {
            this.$refs.userFormRef.validate( async valid => {
                if(valid) {
                    console.log('验证通过');
                    const { data: res } = await this.$http.post('/api/user/register', this.userModel)
                    
                    if (res.errno == 0) {
                        this.$message.success('添加成功')
                        this.dialogVisible = false
                    } else {
                        this.$message.error('添加失败:' + res.message)
                    }
                } 
            })
        },
        // switch切换状态
        switchChanged(value) {
            this.userModel.isAdmin = value
        },
        // 获取所有数据
        async getAllUsers() {
            const { data: res } = await this.$http.get('/api/user/getAllUsers')
            this.usersList = res.data
            console.log(this.usersList);
        },
        // 编辑管理员
        changeAdmin(userId) {

        }
    }
}
</script>

<style lang="scss" scoped>
@import '@css/style.scss';
    .el-card {
        margin-top: 20px;
    }

    .btns {
        display: flex;
        justify-content: flex-end;
    }

    .avators {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
</style>