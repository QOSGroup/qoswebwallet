

<template id="template-home">
    <el-row>
        <el-col :span="24">
            <el-container>
                <el-header>
                    <main-header />
                </el-header>
                <el-main>
                    <app-account />
                </el-main>
            </el-container>
        </el-col>
    </el-row>
</template>
<style>
    body {
        background: #081A2A;
    }
</style>

<script>
import MainHeader from './main-header.vue'
import AppAccount from './account/index.vue'

export default {
    name: 'Main',
    components: {
      'main-header': MainHeader,
      'app-account': AppAccount
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


