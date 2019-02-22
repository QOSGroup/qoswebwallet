

<template id="template-home">
    <a-layout>
      <a-layout-header>
        <main-header />
      </a-layout-header>
      <a-layout-content>
        <!-- <app-account /> -->
        <app-lock />
      </a-layout-content>
    </a-layout>

</template>
<style>
    body {
        background: #081A2A;
    }
</style>

<script>
import MainHeader from './main-header.vue'
import AppAccount from './account/index.vue'
import AppLock from './lock/index.vue'

export default {
    name: 'Main',
    components: {
      'main-header': MainHeader,
      'app-account': AppAccount,
      'app-lock': AppLock
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


