<template>
  <!-- <el-dropdown>
    <span class="el-dropdown-link" style="color:#fff">
      主网络<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>测试网络</el-dropdown-item>
      <el-dropdown-item>自定义网络</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown> -->
   <a-dropdown>
    <a class="ant-dropdown-link" href="#">
      主网络 <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item>
        <a href="javascript:;">测试网络</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;">自定义网络</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>