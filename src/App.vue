<template>
  <div id="app">
    <!--header-->
    <el-menu theme="light" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div>
        <img src="/static/main/logo.png">
      </div>
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="new">新闻</el-menu-item>
      <el-submenu index="service">
        <template slot="title">服务咨询</template>
        <el-menu-item index="option1">选项1</el-menu-item>
        <el-menu-item index="option2">选项2</el-menu-item>
        <el-menu-item index="option3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="aboutUs">联系我们</el-menu-item>
    </el-menu>
    <!--main-->
    <router-view></router-view>
    <!--footer-->
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handleSelect(key, keyPath) {
      if (keyPath.length == 1) {
        console.log(key)
      } else{
        console.log(keyPath[1])
      }
    }
  }
}
</script>
