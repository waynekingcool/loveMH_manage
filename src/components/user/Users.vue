<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card>
            <!-- 添加用户,相当于注册 -->
            <el-row>
                <el-col :span="8">
                    11111
                </el-col>
                <el-col :span="4">222</el-col>
            </el-row>
        </el-card>


        <!-- <el-upload :action="uploadURL"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :on-error="handleError"
        :headers="headerObj"
        list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
        </el-upload> -->
    </div>
</template>

<script>
export default {
    name: 'Users',
    data () {
        return {
            uploadURL: 'http://127.0.0.1:3000/api/utils/upload',
            headerObj: {
                Authorization: window.sessionStorage.getItem('token')
            }
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
            }
        },
        handleError(err) {
            this.$message({
                message: '图片上传失败' + err,
                type: 'error'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@css/style.scss';
    
</style>