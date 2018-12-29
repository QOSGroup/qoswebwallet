

<template id="template-home">
    <el-row>
        <el-col :span="24">
            <el-container>
                <el-header>
                    <network-switch />
                </el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-col>
    </el-row>
</template>

<script>
import NetworkSwitch from './network-swtich.vue'
export default {
    name: 'Main',
    components: {
      'network-switch': NetworkSwitch
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


