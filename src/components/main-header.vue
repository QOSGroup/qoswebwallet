

<template id="template-home">
    <a-row  :gutter="20">
        <a-col :span="8">
            <network-switch />
        </a-col>
        <a-col :span="8" style="text-align:center">
            <div class="logo"></div>
        </a-col>
        <a-col :span="6" :offset="2">
            <a-button icon="el-icon-setting" plain circle style="float:right"></a-button>
        </a-col>
    </a-row >
</template>
<style scoped>
    .logo {
        display: inline-block;
        width: 117px;
        height: 40px;
        background: url(../assets/qoslogo.png) no-repeat 50%;
        background-size: cover;
    }
</style>

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


