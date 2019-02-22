

<template id="template-home">
    <a-row :gutter="8">
        <a-col :span="12">

             <a-button type="primary" shape="circle" icon="download" :size="size" />
            <div style="display:inline-block;margin-left:12px;color: #fff;font-size:1.5em;font-weight:bold;margin-right:">PETER HU</div>
            <h6 style="color: white;margin-left:3px;">总资产: 300000 RMB</h6>
        </a-col>
        <a-col :span="12">
            <!-- <el-dropdown :hide-on-click="false" style="float:right" @command="handleCommand">
                <span class="el-dropdown-link">
                    <el-button icon="el-icon-plus" circle></el-button>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="to.create.account">创建账户</el-dropdown-item>
                    <el-dropdown-item command="to.import.account">导入账户</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown> -->
        </a-col>
    </a-row>
</template>
<style scoped>
</style>

<script>
export default {
    name: 'account-header',
    data: ()=>{
        return {
            isShow: false
        }
    },
    props: {

    },
    methods: {
        handleCommand(command){
            this.bus.$emit(command)
        }
    }
}
</script>


