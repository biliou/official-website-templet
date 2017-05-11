<template>
  <div id="app">
    <!--header-->
    <el-menu theme="light" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="companyLogo">
        <label>company Icon</label>
        </br>
        <label>company Name</label>
      </div>
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="new">新闻</el-menu-item>
      <el-menu-item index="new">宠物学堂</el-menu-item>
      <el-submenu index="service">
        <template slot="title">服务咨询</template>
        <el-menu-item index="option1">选项1</el-menu-item>
        <el-menu-item index="option2">选项2</el-menu-item>
        <el-menu-item index="option3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="aboutUs">联系我们</el-menu-item>
      <div class="changeLanguage">
        <label>中文</label>&nbsp;|&nbsp;
        <label>English</label>
      </div>
    </el-menu>
    <!--main-->
    <router-view></router-view>
    <!--footer-->
    <!--联系方式-->
    <el-row :gutter="20">
      <el-col :span="8">
        <label>company Name</label>
        </br>
        <ul>
          <li>Weibo Icon</li>
          <li>WeChat</li>
        </ul>
      </el-col>
      <el-col :span="16">
        <ul>
          <li>
            <label>联系地址</label>
            <label>86-90 Paul Street, London, EC2A 4NE</label>
          </li>
          <li>
            <label>热线电话</label>
            <label>+44(0)77 8666 9666 / +44(0)20 8457 9519</label>
          </li>
          <li>
            <label>咨询邮箱</label>
            <label>info@petswecare.com</label>
          </li>
          <li>
            <label>WeChat</label>
            <label>PetsWeCare</label>
          </li>
        </ul>
      </el-col>
    </el-row>
    <!--联系按钮-->
    <el-button type="text" :plain="true">在线询价</el-button>
    <!--公司版权信息-->
    <el-row :gutter="20">
      <el-col :span="4">&nbsp;</el-col>
      <el-col :span="16">
        <label>Copyright © 2008-2015 PetsWeCare.com. All Rights Reserved. </label>
      </el-col>
      <el-col :span="4">&nbsp;</el-col>
    </el-row>
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
      } else {
        console.log(keyPath[1])
      }
    }
  }
}
</script>
<style>
body {
  font-size: small;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>