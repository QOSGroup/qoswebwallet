

<template id="template-home">
    <el-container>
        <el-header style="padding: 0;">
            <account-header />
        </el-header>
        <el-main style="margin-top:30px">
            <account-detail v-show="showDetail"/>
            <account-createform v-show="showCreateForm"/>
        </el-main>
    </el-container>
</template>
<style scoped>
</style>

<script>
import AccountHeader from './header.vue'
import AccountDetail from './detail.vue'
import AccountCreateForm from './createform.vue'

export default {
    name: 'app-account',
    components: {
        'account-header': AccountHeader,
        'account-detail': AccountDetail,
        'account-createform': AccountCreateForm
    },
    data: ()=>{
        return {
            showCreateForm: false,
            showDetail: true
        }
    },
    props: {

    },
    mounted(){
        console.log('bus', this.bus)
        this.bus.$on('to.create.account', ()=>{
            this.showCreateForm = true
            this.showDetail = false
        })
    },
    methods: {
        show: function(){
            console.log('show')
            this.isShow = true
        }
    }
}
</script>


