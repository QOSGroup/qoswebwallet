

<template id="template-home">
    <el-row>
        <el-col :span="12">
            <el-button type="primary" icon="el-icon-location" circle></el-button>
            <div style="display:inline-block;margin-left:12px;color: #fff;font-size:1.5em;font-weight:bold;margin-right:">PETER HU</div>
            <h6 style="color: white;margin-left:3px;">总资产: 300000 RMB</h6>
        </el-col>
        <el-col :span="12">
            <el-dropdown :hide-on-click="false" style="float:right">
                <span class="el-dropdown-link">
                    <el-button icon="el-icon-plus" circle></el-button>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>创建账户</el-dropdown-item>
                    <el-dropdown-item>导入账户</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
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
        show: function(){
            console.log('show');
            this.isShow = true;
        }
    }
}
</script>


