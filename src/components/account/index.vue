

<template id="template-home">
    <el-container>
        <el-header style="padding: 0;">
            <account-header />
        </el-header>
        <el-main style="margin-top:30px">
            <account-detail />
        </el-main>
    </el-container>
</template>
<style scoped>
</style>

<script>
import AccountHeader from './header.vue'
import AccountDetail from './detail.vue'

export default {
    name: 'app-account',
    components: {
        'account-header': AccountHeader,
        'account-detail': AccountDetail
    },
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


