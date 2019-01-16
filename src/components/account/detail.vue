

<template>
    <el-card class="box-card" style="background:#0E2336">
        <div slot="header" class="clearfix">
            <span>QOSD</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </el-card>
</template>
<style scoped>
</style>

<script>
export default {
    name: 'account-detail',
    data: ()=>{
        return {

        }
    },
    props: {

    },
    methods: {
        show: function(){

        }
    }
}
</script>


