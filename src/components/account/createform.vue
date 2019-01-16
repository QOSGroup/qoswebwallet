

<template>
    <el-card class="box-card" style="background:#0E2336">
        <el-form ref="form" class="demo-ruleForm">
            <el-form-item>
                <el-input v-model="input" placeholder="请输入账户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit('numberValidateForm')">提交</el-button>
            </el-form-item>
        </el-form>

    </el-card>
</template>
<style scoped>
</style>

<script>
export default {
    name: 'account-createform',
    data: ()=>{
        return {
            input: ''
        }
    },
    props: {

    },

    methods: {
        submit(){
            const newAccount = qweb.newAccount()
            console.log('newAccount', newAccount)
        }
    }
}
</script>


