

<template>
    <el-card class="box-card" style="background:#0E2336">
        <el-form ref="form" class="demo-ruleForm">
            <el-form-item>
                <el-input v-model="input" placeholder="请输入账户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 100%" @click="submit('numberValidateForm')">创建账户</el-button>
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
            //const newAccount = qweb.newAccount()
            QWebWorker.createAccount().then((account)=>{
                console.log('qweb.worker.createaccount', account)
                qweb.account.get(account.address).then(res => {
                    console.log('qweb.res.account', account)
                })
            })
        }
    }
}
</script>


