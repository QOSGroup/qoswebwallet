

<template id="template-home">
    <el-container>
        <el-card class="box-card" style="background:#0E2336">
            <el-form ref="form" class="demo-ruleForm">
                <el-form-item>
                    <el-input v-model="input" placeholder="请输入密码" type="password">
                        <el-button slot="append" icon="el-icon-circle-check"></el-button>
                    </el-input>
                </el-form-item>
            </el-form>
        </el-card>
    </el-container>
</template>
<style scoped>
</style>

<script>


export default {
    name: 'app-lock',
    data: ()=>{
        return {
            input: ''
        }
    },
    props: {

    },
    mounted(){

    },
    methods: {

    }
}
</script>


